import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-sm text-white">
              nil<span className="text-accent-soft">.tanya</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-steel">
              Computer Engineering student and IT Systems & Networks technician
              based in {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel-dark">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/skills", label: "Skills" },
                { to: "/experience", label: "Experience" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-steel transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-steel-dark">Projects</p>
            <ul className="mt-4 space-y-2 text-sm">
              {projects.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="text-steel transition hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-steel-dark">
            © {year} {profile.name}. Built with React & Tailwind CSS.
          </p>
          <a href={`mailto:${profile.email}`} className="font-mono text-xs text-steel transition hover:text-accent-soft">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
