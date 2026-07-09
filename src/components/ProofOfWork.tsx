import { certifications, currentlyInTheLab, profile, proofStats } from "../data/profile";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

/** Credibility section: verifiable facts, certifications and what's in progress. */
export default function ProofOfWork() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="proof of work"
            title="Verifiable, not just claimed"
            description="Live deployments, named certifications and what I'm building right now."
          />
        </Reveal>

        {/* Stats */}
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-2xl border border-slate-200 bg-mist p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <dd className="text-4xl font-extrabold tracking-tight text-navy-900">{stat.value}</dd>
                <dt className="mt-2 text-sm leading-snug text-steel-dark">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Certifications */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-slate-200 p-7">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="font-semibold text-ink">{cert.name}</span>
                    <span className="shrink-0 font-mono text-xs text-steel-dark">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Currently in the lab */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-navy-900 p-7">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-soft">
                <span aria-hidden="true">$ </span>currently in the lab
              </h3>
              <ul className="mt-5 flex-1 space-y-3">
                {currentlyInTheLab.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-steel">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent-soft"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
                Follow the work on GitHub
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
