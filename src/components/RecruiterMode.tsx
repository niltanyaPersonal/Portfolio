import { profile, recruiterMode } from "../data/profile";
import Reveal from "./Reveal";

/** Scannable summary aimed at recruiters: value, roles, facts and direct actions. */
export default function RecruiterMode() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24" id="recruiter-mode">
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm font-medium text-accent-soft">
            <span aria-hidden="true">// </span>recruiter mode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The 30-second summary
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Everything you need to decide whether to interview me, in one screen.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* What I bring + roles */}
          <Reveal delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-steel">
                  What I bring from day one
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {recruiterMode.dayOne.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-steel sm:text-base">
                      <svg className="mt-1 shrink-0 text-emerald-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span><span className="font-semibold text-white">{item.split(":")[0]}</span>{item.includes(":") ? `:${item.split(":").slice(1).join(":")}` : ""}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-steel">
                  Roles that fit
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {recruiterMode.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Facts + actions */}
          <Reveal delay={200}>
            <aside className="h-fit rounded-2xl border border-white/10 bg-navy-950/60 p-7 backdrop-blur">
              <dl className="space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-steel">Location</dt>
                  <dd className="font-semibold text-white">{profile.location} · Hybrid</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-steel">Availability</dt>
                  <dd className="inline-flex items-center gap-2 font-semibold text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                    ASAP
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-steel">Languages</dt>
                  <dd className="font-semibold text-white">{recruiterMode.languages.join(" · ")}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-steel">Studying</dt>
                  <dd className="font-semibold text-white">Comp. Engineering @ UOC</dd>
                </div>
              </dl>
              <div className="mt-7 space-y-3">
                <a
                  href={profile.cvFile}
                  download
                  className="block w-full rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent-soft"
                >
                  Download CV
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-accent hover:text-accent-soft"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="block w-full rounded-lg border border-white/15 px-5 py-3 text-center font-mono text-sm text-white transition hover:border-accent hover:text-accent-soft"
                >
                  {profile.email}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
