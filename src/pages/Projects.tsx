import { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects, projectCategories, type ProjectCategory } from "../data/projects";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  usePageTitle(
    "Projects",
    "Real websites, dashboards and web apps built for businesses: TAMA Studios Dashboard, Clínica Veterinaria Cantabria, Inmobiliaria Sant Quirze, Xavi Tanya Serveis Integrals and Tot Pizza."
  );
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="projects"
        title="Real work, real businesses"
        description="Dashboards, corporate websites, web apps and concepts — designed and built end to end."
      />

      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    filter === cat
                      ? "bg-navy-900 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-steel-dark hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3" key={filter}>
            {visible.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-12 text-center text-steel-dark">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
