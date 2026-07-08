import { usePageTitle } from "../hooks/usePageTitle";
import { experience, education, certifications } from "../data/profile";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

export default function Experience() {
  usePageTitle("Experience");

  return (
    <>
      <PageHeader
        eyebrow="experience"
        title="Professional experience"
        description="Technical roles, teaching and hands-on work — every position added responsibility, problem solving and real-world skills."
      />

      {/* ---------- Timeline ---------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <ol className="relative space-y-10 border-l-2 border-slate-200 pl-8 sm:pl-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.role}-${job.company}`} delay={i * 80} as="li">
                <div className="relative">
                  <span
                    className={`absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white sm:-left-[49px] ${
                      job.kind === "tech" ? "bg-accent" : "bg-slate-300"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h2 className="text-lg font-bold text-ink">{job.role}</h2>
                      {job.kind === "tech" && (
                        <span className="rounded-full bg-ice px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
                          IT
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-accent">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-steel-dark">{job.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-steel-dark">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={100}>
            <p className="mt-12 rounded-xl border-l-2 border-accent bg-mist p-5 text-sm leading-relaxed text-steel-dark">
              Beyond the technical side, this mix of roles taught me
              responsibility, client communication, problem solving under
              pressure and the ability to adapt to very different environments
              — from a server room to a construction site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="education"
              title="Academic background"
              description="Formal training focused on systems, networks and cybersecurity."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <svg className="text-accent" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4L2 9l10 5 10-5-10-5zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v5" />
                  </svg>
                  <h3 className="mt-4 flex-1 text-base font-bold leading-snug text-ink">{item.degree}</h3>
                  <p className="mt-3 text-sm text-steel-dark">{item.school}</p>
                  {item.status && (
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-ice px-3 py-1 text-xs font-semibold text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
                      {item.status}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Certifications ---------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="certifications"
              title="Certifications"
              description="Complementary technical certifications in hardware, databases and server administration."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 80} as="li">
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-accent/40 hover:bg-mist">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ice text-accent">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14L7 21l5-2.5L17 21l-1.5-7" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold text-ink">{cert}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
