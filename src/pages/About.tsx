import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { profile } from "../data/profile";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import SkillIcon from "../components/SkillIcon";

const focusAreas = [
  {
    icon: "sysadmin",
    title: "Systems & Infrastructure",
    text: "Practical experience administering Windows Server and Linux environments: installation, configuration, user management and maintenance in real business contexts.",
  },
  {
    icon: "network",
    title: "Networking",
    text: "Working knowledge of TCP/IP, DNS, DHCP, VPN and Active Directory — the building blocks of any reliable company network.",
  },
  {
    icon: "security",
    title: "Cybersecurity",
    text: "Trained in cybersecurity fundamentals through my Higher Technician studies, with hands-on security labs and a strong focus on good practices and incident awareness.",
  },
  {
    icon: "code",
    title: "Web Development",
    text: "I design and build dashboards, business websites, landing pages and web apps for real clients — clean, functional and structured for maintainability.",
  },
];

const solutions = [
  "Business dashboards that organize company information clearly",
  "Corporate websites for local businesses and clinics",
  "Web applications with internal management features",
  "Landing pages oriented to customer acquisition",
  "Server setup, configuration and maintenance",
  "Network and access troubleshooting",
];

export default function About() {
  usePageTitle(
    "About",
    "Computer Engineering student and IT Systems & Networks technician in Barcelona. A hybrid profile combining systems administration, networking, cybersecurity and web development."
  );

  return (
    <>
      <PageHeader
        eyebrow="about me"
        title="A hybrid IT profile, built on practice"
        description="Systems, networks, cybersecurity and web development — combined into one analytical, hands-on way of working."
      />

      {/* ---------- Bio ---------- */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-steel-dark sm:text-lg">
              <p className="text-xl font-semibold text-ink sm:text-2xl">
                Most developers know code. Most sysadmins know servers. I work
                in both worlds.
              </p>
              <p>
                I can configure the Windows Server your business runs on, secure
                the network it lives in, and build the web app your team uses
                every day. I'm a Computer Engineering student and IT Systems &
                Networks graduate based in Barcelona, with practical experience
                in Linux and Windows Server environments, system administration,
                networking, cybersecurity, troubleshooting and web application
                development.
              </p>
              <p>
                I enjoy building clean, functional and well-structured digital
                solutions with a strong analytical mindset and a continuous
                learning approach.
              </p>
              <p>
                My path has always combined two sides of IT: the infrastructure
                side — servers, networks, security — and the development side —
                websites, dashboards and web apps for real businesses. That
                combination lets me understand a system end to end: from the
                network it runs on to the interface the user sees.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-slate-200 bg-mist p-7">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">profile.json</p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Name", profile.name],
                  ["Location", profile.location],
                  ["Availability", profile.availability],
                  ["Email", profile.email],
                  ["Phone", profile.phone],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <dt className="font-mono text-xs text-steel-dark">"{label.toLowerCase()}":</dt>
                    <dd className="font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/contact"
                className="mt-7 inline-block w-full rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-accent-soft"
              >
                Contact me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Focus areas ---------- */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="technical profile"
              title="Where I focus"
              description="Four areas that reinforce each other and cover a system from infrastructure to interface."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 100}>
                <div className="flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice text-accent">
                    <SkillIcon name={area.icon} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-dark">{area.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What I can build ---------- */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="solutions"
              title="What I can create"
              description="Practical, business-oriented solutions — no unnecessary complexity."
            />
            <ul className="mt-8 space-y-3.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-steel-dark sm:text-base">
                  <svg className="mt-1 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <SectionTitle
              eyebrow="approach"
              title="How I work"
              description="The habits behind every project I take on."
            />
            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Analytical first",
                  text: "I break problems down before touching anything — in troubleshooting and in development alike.",
                },
                {
                  title: "Clean and structured",
                  text: "Ordered code, clear naming and layouts that make sense. If it's not maintainable, it's not finished.",
                },
                {
                  title: "Always learning",
                  text: "Currently studying Computer Engineering while deepening my cybersecurity and development skills.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border-l-2 border-accent bg-mist p-5">
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-dark">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
          <Reveal>
            <p className="text-lg font-semibold text-white sm:text-xl">Want to see this profile in action?</p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
            >
              View Projects
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
