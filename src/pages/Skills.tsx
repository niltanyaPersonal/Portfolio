import { usePageTitle } from "../hooks/usePageTitle";
import { skillGroups } from "../data/profile";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SkillIcon from "../components/SkillIcon";

export default function Skills() {
  usePageTitle(
    "Skills",
    "Technical skills of Nil Taña Mateu: Windows Server, Linux, TCP/IP, DNS, DHCP, VPN, Active Directory, SQL, PL/SQL, Oracle DB, Docker, cybersecurity and web development."
  );

  return (
    <>
      <PageHeader
        eyebrow="skills"
        title="Technical skill set"
        description="From operating systems and networking to databases, development and cybersecurity — the tools I work with every day."
      />

      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 100} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice text-accent">
                      <SkillIcon name={group.icon} />
                    </span>
                    <h2 className="text-base font-bold text-ink">{group.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-steel-dark">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 rounded-2xl border border-slate-200 bg-navy-900 p-8 sm:p-10">
              <p className="font-mono text-sm text-accent-soft">
                <span aria-hidden="true">$ </span>uptime --learning
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
                This list keeps growing. I'm currently studying Computer
                Engineering at UOC and continuously deepening my knowledge in
                cybersecurity, systems and modern web development.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
