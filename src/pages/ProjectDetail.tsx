import { Link, useParams } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { getProject, getAdjacentProjects } from "../data/projects";
import BrowserMockup from "../components/BrowserMockup";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  usePageTitle(project?.name ?? "Project not found", project?.description);

  if (!project) return <NotFound />;

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      {/* ---------- Project hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-36">
        <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `${project.accent}1a` }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-steel transition hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5m6 6l-6-6 6-6" />
              </svg>
              All projects
            </Link>
            <p className="mt-8 font-mono text-sm font-medium text-accent-soft">{project.type}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
              >
                Visit Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent-soft"
              >
                Request something similar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Mockup ---------- */}
      <section className="bg-mist pt-0 pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="-mt-2">
            <div className="translate-y-[-3rem]">
              <BrowserMockup project={project} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="bg-white pt-4 pb-2">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <dl className="grid gap-4 sm:grid-cols-3">
              {project.highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-slate-200 bg-mist p-5">
                  <dt className="order-2 mt-1 text-sm leading-snug text-steel-dark">{h.label}</dt>
                  <dd className="text-2xl font-extrabold tracking-tight text-navy-900">{h.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- Details ---------- */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">Objective</h2>
              <p className="mt-4 leading-relaxed text-steel-dark">{project.objective}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">The problem it solves</h2>
              <p className="mt-4 leading-relaxed text-steel-dark">{project.problem}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">My role</h2>
              <p className="mt-4 leading-relaxed text-steel-dark">{project.role}</p>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-steel-dark">
                    <svg className="mt-0.5 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">What I learned</h2>
              <ul className="mt-5 space-y-4">
                {project.learnings.map((lesson) => (
                  <li
                    key={lesson}
                    className="rounded-xl border-l-2 border-accent bg-mist p-5 text-sm leading-relaxed text-steel-dark"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <Reveal delay={150}>
            <aside className="h-fit rounded-2xl border border-slate-200 bg-mist p-7 lg:sticky lg:top-24">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">project.info</p>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Type</dt>
                  <dd className="mt-1 text-steel-dark">{project.type}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Technologies</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-md bg-white px-2.5 py-1 font-mono text-[11px] text-steel-dark ring-1 ring-slate-200">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Live URL</dt>
                  <dd className="mt-1">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-mono text-xs text-accent transition hover:text-accent-soft"
                    >
                      {project.url}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ---------- Prev / Next ---------- */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between gap-4 px-5 sm:px-8">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex-1 rounded-xl border border-slate-200 p-5 transition hover:border-accent/40 hover:bg-mist"
            >
              <p className="text-xs font-medium text-steel-dark">← Previous project</p>
              <p className="mt-1 text-sm font-bold text-ink transition group-hover:text-accent">{prev.name}</p>
            </Link>
          ) : (
            <span className="flex-1" aria-hidden="true" />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex-1 rounded-xl border border-slate-200 p-5 text-right transition hover:border-accent/40 hover:bg-mist"
            >
              <p className="text-xs font-medium text-steel-dark">Next project →</p>
              <p className="mt-1 text-sm font-bold text-ink transition group-hover:text-accent">{next.name}</p>
            </Link>
          ) : (
            <span className="flex-1" aria-hidden="true" />
          )}
        </div>
      </section>
    </>
  );
}
