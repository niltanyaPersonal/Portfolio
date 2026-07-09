export const profile = {
  name: "Nil Taña Mateu",
  title: "Computer Engineering Student · IT Systems & Networks · Cybersecurity · Web Developer",
  tagline:
    "I've shipped five production websites and apps for real businesses — from a bilingual clinic website to an offline-first field app for a construction company — combining web development with a solid base in systems administration, networking and cybersecurity.",
  email: "nil.tanya1@gmail.com",
  phone: "+34 620 032 469",
  location: "Barcelona",
  availability: "Hybrid availability · Available ASAP",
  cvFile: "/Nil-Tanya-Mateu-CV.pdf",
  github: "https://github.com/niltanyaPersonal",
  linkedin: "https://www.linkedin.com/in/nil-ta%C3%B1a-mateu-9b1856228/",
  siteUrl: "https://niltanya.dev",
};

export interface SkillGroup {
  title: string;
  icon: string;
  /** One honest line about where these skills have actually been used. */
  context: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Operating Systems",
    icon: "os",
    context: "Installed, configured and maintained in real internships and personal labs.",
    skills: ["Windows Server", "Linux", "macOS (basic)"],
  },
  {
    title: "Systems Administration",
    icon: "sysadmin",
    context: "Day-to-day administration at Hercal Diggers: users, permissions, maintenance, incident resolution.",
    skills: [
      "System installation",
      "Configuration",
      "User management",
      "Maintenance",
      "Troubleshooting",
    ],
  },
  {
    title: "Networking",
    icon: "network",
    context: "Configured and troubleshot in company environments and hands-on course labs.",
    skills: ["TCP/IP", "DNS", "DHCP", "VPN", "Active Directory"],
  },
  {
    title: "Databases",
    icon: "database",
    context: "Oracle Academy certified — applied in coursework and in the data models of my apps.",
    skills: ["SQL", "PL/SQL", "Oracle DB"],
  },
  {
    title: "Development",
    icon: "code",
    context: "Where I ship: five production projects for real businesses, from vanilla JS to Next.js.",
    skills: [
      "Web applications",
      "Dashboards",
      "Business websites",
      "Landing pages",
      "JavaScript / TypeScript",
    ],
  },
  {
    title: "Containers",
    icon: "container",
    context: "Familiar through personal experiments and coursework — comfortable reading and running compose setups.",
    skills: ["Docker (familiar)"],
  },
  {
    title: "Cybersecurity",
    icon: "security",
    context: "Trained in my ASIX degree with hands-on labs — applied in my apps via auth, MFA and Row Level Security.",
    skills: [
      "Cybersecurity fundamentals",
      "Security labs",
      "Good practices",
      "Incident awareness",
    ],
  },
  {
    title: "Soft Skills",
    icon: "soft",
    context: "Forged in support roles, teaching programming and customer-facing work under pressure.",
    skills: [
      "Problem solving",
      "Analytical thinking",
      "Technical communication",
      "Continuous learning",
      "Attention to detail",
      "Working under pressure",
    ],
  },
];

/* ---------- Recruiter Mode ---------- */

export const recruiterMode = {
  dayOne: [
    "Production experience: five real deployments for real businesses — I've already shipped, maintained and fixed things people depend on.",
    "A hybrid profile: I can hold a support queue in the morning and ship a web feature in the afternoon.",
    "Security mindset by default: authentication, MFA and database-level security applied in my own projects, not just studied.",
    "Low ramp-up: used to learning fast, documenting what I do and asking the right questions early.",
  ],
  roles: [
    "IT Technician / Help Desk",
    "Junior Systems Administrator",
    "NOC / SOC Analyst (junior)",
    "Junior Web Developer",
    "IT Support & Infrastructure",
  ],
  languages: ["Spanish", "Catalan", "English"],
};

/* ---------- Proof of Work ---------- */

export const proofStats = [
  { value: "5", label: "production projects live right now" },
  { value: "4", label: "certifications — Cisco, Oracle, Microsoft" },
  { value: "3", label: "technical roles in real companies" },
  { value: "1", label: "engineering degree in progress at UOC" },
];

export const currentlyInTheLab = [
  "Degree in Computer Engineering at UOC — in progress",
  "Deepening cybersecurity practice beyond my ASIX training labs",
  "This portfolio: React + TypeScript + Tailwind, open source on GitHub",
];

export interface ExperienceItem {
  role: string;
  company: string;
  kind: "tech" | "other";
  summary: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Systems Technician / Developer Intern",
    company: "Hercal Diggers SL",
    kind: "tech",
    summary:
      "Combined role between systems administration and internal development in a real business environment.",
    points: [
      "Development of internal web applications",
      "Windows and Linux server administration",
      "User support and maintenance",
      "Troubleshooting hardware, software, network and access issues",
    ],
  },
  {
    role: "IT Technician Intern",
    company: "CVS Tot Ordinadors",
    kind: "tech",
    summary:
      "Hands-on technical support role covering the full lifecycle of client equipment.",
    points: [
      "Hardware and software technical support",
      "System installation, configuration and maintenance",
      "IT incident diagnosis and resolution",
    ],
  },
  {
    role: "Programming Instructor",
    company: "Codelearn",
    kind: "tech",
    summary:
      "Teaching role focused on making programming logic accessible to students of different levels.",
    points: [
      "Teaching fundamental programming concepts and logic",
      "Adapting technical explanations to different skill levels",
    ],
  },
  {
    role: "Waiter / Bartender",
    company: "Tot Pizza",
    kind: "other",
    summary:
      "Customer-facing role that strengthened communication and calm decision-making during peak hours.",
    points: ["Customer service", "Order management under pressure"],
  },
  {
    role: "Construction Worker",
    company: "Self-Employed",
    kind: "other",
    summary:
      "Independent work managing real projects end to end, from materials to delivery.",
    points: [
      "Building maintenance",
      "Renovations and infrastructure work",
      "Materials procurement and site management",
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  status?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Degree in Computer Engineering",
    school: "Universitat Oberta de Catalunya",
    status: "In Progress",
  },
  {
    degree: "Higher Technician — IT Systems, Networks & Cybersecurity",
    school: "Institut Jaume Viladoms",
  },
  {
    degree: "Technician — Microinformatics Systems & Networks",
    school: "Institut Jaume Viladoms",
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "IT Essentials: PC Hardware and Software", issuer: "Cisco Networking Academy" },
  { name: "Database Programming with PL/SQL", issuer: "Oracle Academy" },
  { name: "Database Design & Programming with SQL", issuer: "Oracle Academy" },
  { name: "Windows Server 2019 Administration", issuer: "Microsoft" },
];
