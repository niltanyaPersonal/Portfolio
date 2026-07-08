import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import CopyEmailButton from "../components/CopyEmailButton";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      {/* ---------- Header + direct contact ---------- */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-sm font-medium text-accent-soft">
              <span aria-hidden="true">// </span>contact
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let's build something professional together.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              Open to IT, systems, cybersecurity and web development
              opportunities — and to building websites and web apps for
              businesses.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CopyEmailButton />
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-sm text-white transition hover:border-accent hover:bg-accent/10"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />
                </svg>
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-sm text-steel">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {profile.location} · Hybrid
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Form + info ---------- */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
              <h2 className="text-2xl font-bold text-ink">Send me a message</h2>
              <p className="mt-2 text-sm text-steel-dark">
                Fill in the form and it will open in your email client, ready to send.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="text-base font-bold text-ink">Availability</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel-dark">
                  {profile.availability}. Based in {profile.location}, open to
                  hybrid roles and remote collaboration.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <h2 className="text-base font-bold text-ink">See my work first</h2>
                <ul className="mt-4 space-y-2.5">
                  {projects.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/projects/${p.slug}`}
                        className="group inline-flex items-center gap-2 text-sm text-steel-dark transition hover:text-accent"
                      >
                        <svg className="text-accent" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14m-6-6l6 6-6 6" />
                        </svg>
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="rounded-2xl bg-navy-900 p-7">
                <p className="font-mono text-xs text-accent-soft">
                  <span aria-hidden="true">$ </span>echo "response time"
                </p>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  I usually reply within 24 hours. For urgent matters, calling
                  is the fastest option.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
