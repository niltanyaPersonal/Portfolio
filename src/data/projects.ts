export type ProjectCategory =
  | "Dashboards"
  | "Business Websites"
  | "Web Apps"
  | "Landing Pages"
  | "Demo Concepts";

export interface Project {
  slug: string;
  name: string;
  type: string;
  category: ProjectCategory;
  url: string;
  description: string;
  objective: string;
  role: string;
  problem: string;
  features: string[];
  technologies: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "tama-studios-dashboard",
    name: "TAMA Studios Dashboard",
    type: "Business Dashboard",
    category: "Dashboards",
    url: "https://tamastudios.github.io/Dashboard/",
    description:
      "Internal management dashboard for TAMA Studios covering the full business cycle: leads, clients, budgets, invoicing, project production and post-sale support — with real-time data.",
    objective:
      "Centralize the entire operation of TAMA Studios in one tool: from the first commercial contact (prospecting, leads) to production (projects, websites, AI agents, QA deliveries) and post-sale (support, tickets, reports).",
    role:
      "Design and development of the full application: data model, real-time integration with Supabase, all views and the visual system in dark and light mode.",
    problem:
      "Running a web studio means juggling commercial, production and support information at once. This dashboard replaces scattered spreadsheets with structured, real-time views of every area of the business.",
    features: [
      "Commercial module: prospector, leads, companies, budgets and invoices",
      "Production module: projects, websites, AI agents and QA deliveries",
      "Task management with list, kanban and calendar views",
      "Post-sale module: support, tickets and reports",
      "Finance overview and workload-per-person charts",
      "Real-time data sync with Supabase",
      "Dark / light theme and responsive layout",
    ],
    technologies: ["JavaScript", "Vite", "Supabase", "HTML5", "CSS3"],
    accent: "#2563eb",
  },
  {
    slug: "clinica-veterinaria-cantabria",
    name: "Clínica Veterinaria Cantabria",
    type: "Business Website",
    category: "Business Websites",
    url: "https://tamastudios.github.io/Clinica-Veterinaria-Cantabria/",
    description:
      "Bilingual (Catalan / Spanish) corporate website for a veterinary clinic in Barcelona: services, team, FAQ, gallery, live opening-hours status and direct contact — with no framework and no build step.",
    objective:
      "Give the clinic a trustworthy online presence where pet owners can check services, opening hours and urgent phone numbers at a glance, in their preferred language.",
    role:
      "Full design and development: information architecture, bilingual content system (i18n), visual identity on the web, admin content panel and responsive implementation.",
    problem:
      "The clinic needed a professional website that works for a local, bilingual audience and is easy to keep updated — without depending on heavy frameworks or complex hosting.",
    features: [
      "Full Catalan / Spanish language switch (i18n)",
      "Live open / closed status card with schedule and urgent phone",
      "Services, team, opinions, FAQ and photo gallery sections",
      "Consultation form and click-to-call actions",
      "Admin panel to edit site content without touching code",
      "Legal pages and cookie-consent handling",
      "Pure HTML5 + CSS3 + JavaScript — no build step, deploys anywhere",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Pages"],
    accent: "#0ea5e9",
  },
  {
    slug: "inmobiliaria-sant-quirze",
    name: "Inmobiliaria Sant Quirze",
    type: "Real Estate Demo Website",
    category: "Demo Concepts",
    url: "https://immobiliaria-santquirze.vercel.app/",
    description:
      "Full-stack demo website for a local real estate agency: property search with filters, listings managed from a headless CMS and a premium visual identity — built with Next.js and Strapi.",
    objective:
      "Build a realistic, working proposal that shows a local real estate agency how a modern website could present its properties, capture valuation requests and reinforce its brand.",
    role:
      "Concept, design and full-stack development: Next.js frontend, Strapi CMS backend with Cloudinary media, property data model and deployment on Vercel and Render.",
    problem:
      "Local agencies often depend on third-party listing portals. This demo shows how an own website can present properties with better search, imagery and brand identity — and be updated from a CMS without touching code.",
    features: [
      "Property search with filters: location, operation, type and price",
      "Listings managed from a Strapi headless CMS",
      "Buy, rent, sell and property-valuation sections",
      "Smooth animations with Framer Motion",
      "Media management with Cloudinary",
      "Direct contact via phone and WhatsApp chat",
      "Frontend on Vercel, CMS backend on Render",
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Strapi CMS"],
    accent: "#f59e0b",
  },
  {
    slug: "xavi-tanya-serveis-integrals",
    name: "Xavi Tanya Serveis Integrals",
    type: "Construction Company Web App",
    category: "Web Apps",
    url: "https://xavitanya.vercel.app/",
    description:
      "Progressive web app for a construction and integral services company: employee time tracking, work-site management, warehouse stock, work reports and PDF invoicing — usable on site, even offline.",
    objective:
      "Digitalize the daily operations of a construction company: clock-ins, active work sites, material stock, daily work reports and invoicing — from any phone, directly on site.",
    role:
      "Design and development of the complete application: data model in Supabase, all modules, PDF generation, offline support and PWA packaging.",
    problem:
      "Construction teams work on site, often with poor connectivity, and paperwork (clock-ins, work reports, stock) gets lost or delayed. This app puts everything in one tool that keeps working offline and syncs later.",
    features: [
      "Employee clock-in / clock-out with open-shift tracking",
      "Work-site (obras) management with per-site detail and daily reports",
      "Warehouse module with low-stock alerts",
      "PDF invoice and report generation with jsPDF",
      "Clients, employees, schedules and audit log",
      "Installable PWA with offline mode and sync",
      "Mobile-first interface designed for use on site",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "jsPDF", "PWA"],
    accent: "#f97316",
  },
  {
    slug: "tot-pizza-concept",
    name: "Tot Pizza Concept Website",
    type: "Restaurant Concept Website",
    category: "Landing Pages",
    url: "https://tamastudios.github.io/totpizza-web/",
    description:
      "Landing-oriented website for an artisan gluten-free pizzeria in Platja d'Aro, available in four languages (ES / CA / EN / FR), with strong local SEO and direct WhatsApp reservations.",
    objective:
      "Attract both local customers and tourists on the Costa Brava with a fast, appetizing landing page that ranks well in local searches and converts visits into reservations.",
    role:
      "Design and development of the full site: visual style, multilingual content system, menu presentation, local SEO setup (metadata, geo tags, sitemap) and conversion-oriented layout.",
    problem:
      "A seaside restaurant serves visitors in several languages and competes in local search results. This site answers both needs: a four-language interface and carefully worked local SEO, with reservation actions always one tap away.",
    features: [
      "Four-language interface: Spanish, Catalan, English and French",
      "Daily menu and full menu (carta) presentation",
      "Reservations via WhatsApp and click-to-call",
      "Opening hours, location and contact always visible",
      "Local SEO: geo metadata, Open Graph, sitemap and robots setup",
      "Landing-oriented structure for customer acquisition",
      "Pure HTML5 + CSS3 + JavaScript — fast and dependency-free",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO", "i18n"],
    accent: "#ef4444",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Dashboards",
  "Business Websites",
  "Web Apps",
  "Landing Pages",
  "Demo Concepts",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
