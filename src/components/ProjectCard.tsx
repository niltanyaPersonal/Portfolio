import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import BrowserMockup from "./BrowserMockup";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
      <div className="border-b border-slate-100 bg-mist p-5 transition-colors duration-300 group-hover:bg-ice">
        <BrowserMockup project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs font-medium text-accent">{project.type}</p>
        <h3 className="mt-2 text-lg font-bold text-ink transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-dark">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-steel-dark"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Case Study
          </Link>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            View Project
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
