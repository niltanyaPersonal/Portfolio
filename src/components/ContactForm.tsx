import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Contact form that submits through FormSubmit's AJAX endpoint — no backend
 * needed, messages arrive directly to the inbox. Falls back to mailto if
 * the request fails.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Honeypot filled in → silently drop (bot)
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact — ${name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      // Network or service failure — open the visitor's mail client instead
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot field — hidden from humans, catches bots */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or the role you're hiring for…"
          className={`${inputClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-medium text-emerald-600" role="status">
          Message sent — thank you! I usually reply within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-steel-dark" role="status">
          The form service didn't respond, so I opened your email client instead.
          You can also write directly to {profile.email}.
        </p>
      )}
    </form>
  );
}
