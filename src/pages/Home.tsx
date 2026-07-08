import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { profile, skillGroups } from "../data/profile";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import TerminalCard from "../components/TerminalCard";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import SkillIcon from "../components/SkillIcon";

export default function Home() {
  usePageTitle();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-36 pb-24 sm:px-8 lg:grid-cols-2 lg:pt-44 lg:pb-32">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-steel">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                {profile.availability}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent-soft to-sky-400 bg-clip-text text-transparent">
                  Nil Taña Mateu
                </span>
              </h1>
              <p className="mt-4 font-mono text-sm text-steel sm:text-base">{profile.title}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
                {profile.tagline}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
                >
                  View Projects
                </Link>
                <Link
                  to="/about"
                  className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent-soft"
                >
                  About Me
                </Link>
                <Link
                  to="/contact"
                  className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent-soft"
                >
                  Contact
                </Link>
                <a
                  href={profile.cvFile}
                  download
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-steel transition hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
                  </svg>
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <TerminalCard />
          </Reveal>
        </div>
      </section>

      {/* ---------- What I do ---------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="what I do"
              title="Systems, networks and clean web solutions"
              description="A hybrid profile: solid IT infrastructure foundations combined with hands-on web development for real businesses."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "sysadmin",
                title: "Systems Administration",
                text: "Installation, configuration and maintenance of Windows Server and Linux environments.",
              },
              {
                icon: "network",
                title: "Networking",
                text: "TCP/IP, DNS, DHCP, VPN and Active Directory in practical, real-world setups.",
              },
              {
                icon: "security",
                title: "Cybersecurity",
                text: "Security fundamentals, labs and good practices applied to systems and services.",
              },
              {
                icon: "code",
                title: "Web Development",
                text: "Dashboards, business websites and web apps — clean, functional and well structured.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ice text-accent">
                    <SkillIcon name={item.icon} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-dark">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                eyebrow="featured work"
                title="Selected projects"
                description="Real websites, dashboards and web apps built for businesses and concepts."
              />
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-soft"
              >
                All projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 100} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills preview ---------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="stack"
              title="Technical foundations"
              description="From operating systems and networking to databases and development."
            />
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {skillGroups
              .filter((g) => g.icon !== "soft")
              .flatMap((g) => g.skills)
              .map((skill, i) => (
                <Reveal key={skill} delay={Math.min(i * 30, 400)} as="div">
                  <span className="inline-block rounded-lg border border-slate-200 bg-white px-3.5 py-2 font-mono text-xs text-ink transition hover:border-accent hover:text-accent">
                    {skill}
                  </span>
                </Reveal>
              ))}
          </div>
          <Reveal delay={200}>
            <Link
              to="/skills"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-soft"
            >
              Full skill set
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something professional together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-steel">
              Based in Barcelona · {profile.availability}. Open to IT, systems,
              cybersecurity and web development opportunities.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
              >
                Get in touch
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg border border-white/15 px-7 py-3 font-mono text-sm text-white transition hover:border-accent hover:text-accent-soft"
              >
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
