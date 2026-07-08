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
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-steel transition hover:text-white"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-steel transition hover:text-white"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="font-mono text-xs text-steel transition hover:text-accent-soft">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
