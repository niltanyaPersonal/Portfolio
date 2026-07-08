export const profile = {
  name: "Nil Taña Mateu",
  title: "Computer Engineering Student · IT Systems & Networks · Web Developer",
  tagline:
    "I build clean, functional and professional web solutions while combining a strong background in systems administration, networking and cybersecurity.",
  email: "nil.tanya1@gmail.com",
  phone: "+34 620 032 469",
  location: "Barcelona",
  availability: "Hybrid availability · Available ASAP",
  cvFile: "/Nil-Tanya-Mateu-CV.pdf",
};

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Operating Systems",
    icon: "os",
    skills: ["Windows Server", "Linux", "macOS (basic)"],
  },
  {
    title: "Systems Administration",
    icon: "sysadmin",
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
    skills: ["TCP/IP", "DNS", "DHCP", "VPN", "Active Directory"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["SQL", "PL/SQL", "Oracle DB"],
  },
  {
    title: "Development",
    icon: "code",
    skills: [
      "Web applications",
      "Dashboards",
      "Business websites",
      "Landing pages",
      "Basic programming",
    ],
  },
  {
    title: "Containers",
    icon: "container",
    skills: ["Docker (familiar)"],
  },
  {
    title: "Cybersecurity",
    icon: "security",
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

export const certifications: string[] = [
  "IT Essentials: PC Hardware and Software",
  "Database Programming with PL/SQL",
  "Database Design & Programming with SQL",
  "Windows Server 2019 Administration",
];
