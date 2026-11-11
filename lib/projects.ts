// Every project in the portfolio. Each entry gets a card on the home page and its own page at /projects/<slug>.
// To add a new project, add an entry here (and its screenshots to public/projects/<slug>/).

export type ProjectIcon = "shield" | "cart" | "layout" | "smartphone" | "search" | "bot" | "building" | "globe" | "puzzle";

export type Shot = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  /** What kind of thing it is, in a word or two. */
  category: string;
  icon: ProjectIcon;
  /** One sentence for the card. */
  summary: string;
  /** Who it was for: a company, a client, or "Personal project". */
  where: string;
  period: string;
  role: string;
  stack: string[];
  links?: { live?: string; code?: string; site?: string };
  cover?: Shot;
  gallery?: Shot[];
  problem: string;
  built: string[];
  /** How it was built: the decisions worth explaining in an interview. */
  approach?: string[];
  result?: string[];
  /** Shows the English/Arabic card on the project page. */
  bilingualDemo?: boolean;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "policydesk",
    title: "PolicyDesk",
    category: "Web app",
    icon: "shield",
    summary: "An insurance brokerage CRM, from first inquiry to paid policy and renewal, in English and Arabic.",
    where: "Personal project",
    period: "2026",
    role: "Design, frontend, backend, testing and deployment",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind CSS", "i18n (RTL)", "Playwright"],
    links: {
      live: "https://policydesk-opal.vercel.app/login",
      code: "https://github.com/AbdulSubhan1/policydesk",
    },
    cover: {
      src: "/policydesk-lead.webp",
      alt: "PolicyDesk lead page: progress from quote to paid, quotes from two insurers, and the customer card",
      width: 2880,
      height: 1060,
    },
    gallery: [
      {
        src: "/policydesk-dashboard.webp",
        alt: "PolicyDesk dashboard: counts that animate in, the opportunity funnel, the lead pipeline and renewals coming up",
        width: 2880,
        height: 1800,
      },
    ],
    problem:
      "A brokerage handles many people on one customer: a coordinator qualifies the inquiry, an advisor quotes, compliance checks identity, finance records the payment. Each needs to see only their own work, and nothing may be sold before every check has passed.",
    built: [
      "The full journey: opportunity, lead, quotes from insurer plans, KYC/AML screening, required documents, booking, payment and renewal",
      "Database-driven roles and permissions with all, department and own-record data scopes, enforced in every query and server action",
      "English and Arabic for the interface, validation messages and stored data, with a mirrored right-to-left layout",
      "Its own UI library of 54 components, with a docs-style component library inside the app",
      "An in-app knowledge base with a training guide, and Playwright tests for every role's journey",
    ],
    approach: [
      "Server Components fetch data on the server; every change goes through a Server Action that checks the permission, validates with the same Zod schema the form uses, and writes an audit entry",
      "Records outside a user's scope return a real 404, and links use UUIDs with human references like CAR-J2M3HX7, so URLs can't be guessed",
      "Lint rules ban raw HTML controls, inline styles and outside UI libraries, so the whole app stays on one design system",
    ],
    result: [
      "Live on Vercel with Neon Postgres; anyone can try every role with one click",
      "Its foundations became the CRM Kit, so the next product starts from the same standard",
    ],
    bilingualDemo: true,
    featured: true,
  },
  {
    slug: "insurance-purchase-journeys",
    title: "Insurance purchase journeys",
    category: "Web app",
    icon: "cart",
    summary: "Online quote, compare and buy flows for eight insurance products, with payments and insurer integrations.",
    where: "InsuranceMarket.ae, UAE",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Next.js", "TypeScript", "Node.js", "NestJS", "Tailwind CSS"],
    links: { site: "https://insurancemarket.ae" },
    problem:
      "Customers needed to get quotes, compare plans and buy policies online for car, travel, home, health, savings, life, cyber and smartphone insurance. Each product has its own questions, insurer integrations and compliance checks.",
    built: [
      "End-to-end purchase flows for all eight lines of business",
      "Node.js and NestJS services for lead submission, plan display, add-ons and online payment",
      "Integrations with insurer and partner APIs to fetch quotes and push leads and policies across systems",
      "KYC/AML checks before a policy is issued, plus email and OTP verification steps",
      "Document upload linked to the CRM, with AI-powered OCR that fills in the customer's details",
    ],
    approach: [
      "Shared building blocks across products, so a new line of business reuses the journey rather than copying it",
      "Compliance checks sit in the flow itself, so a policy can't be issued with a step skipped",
    ],
  },
  {
    slug: "erp-dashboards",
    title: "ERP dashboards",
    category: "Dashboard",
    icon: "layout",
    summary: "Data-heavy procurement and HR dashboards for enterprise clients, including Dawlance.",
    where: "Finosys",
    period: "2023 – 2024",
    role: "Frontend engineer",
    stack: ["React", "TypeScript", "Redux Toolkit", "REST APIs"],
    problem:
      "Enterprise teams in procurement and HR worked through large amounts of data every day, and needed dashboards that stayed fast and clear as that data grew.",
    built: [
      "Data-intensive dashboards for procurement and HR modules",
      "A set of reusable React components shared across client projects",
      "UI updates driven by analytics, consuming REST APIs",
    ],
    approach: ["Optimised rendering so large tables and charts stayed responsive"],
  },
  {
    slug: "food-delivery-app",
    title: "Food delivery app",
    category: "Mobile app",
    icon: "smartphone",
    summary: "One React Native app for three roles: customers order, vendors prepare, riders deliver.",
    where: "Chaynz Tech",
    period: "2022 – 2023",
    role: "React Native developer",
    stack: ["React Native", "REST APIs", "Google Maps", "Push notifications"],
    problem:
      "A delivery business needed customers, vendors and riders working from the same order in real time, each with a different view of it.",
    built: [
      "A multi-role app with separate flows for vendor, customer and rider",
      "Live location with Google Maps, push notifications for order updates, and QR codes",
      "MVPs for startup and university clients",
    ],
  },
  {
    slug: "seo-content-platform",
    title: "SEO and performance platform",
    category: "Content site",
    icon: "search",
    summary: "A 270+ page content site that ranks, joined to the transactional app under one domain.",
    where: "InsuranceMarket.ae, UAE",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Next.js", "Headless WordPress", "ISR", "next-intl", "Tailwind CSS"],
    problem:
      "Marketing needed fast, indexable landing pages for every product, connected seamlessly to the app where customers actually buy.",
    built: [
      "Landing pages for every line of business on headless WordPress, with ISR and on-demand revalidation",
      "Next.js rewrites that serve the content site and the app under one domain, and an automated sitemap",
      "English and Arabic with next-intl, including right-to-left layouts",
    ],
    approach: [
      "Migrated from Next.js 12 to 15",
      "Moved responsive logic out of JavaScript into mobile-first Tailwind CSS",
      "Worked through TTFB, payload size and Core Web Vitals on both apps",
    ],
    result: ["270+ pages published", "Automated sitemap shipped to production"],
  },
  {
    slug: "ai-developer-tooling",
    title: "AI developer tooling",
    category: "Developer tools",
    icon: "bot",
    summary: "MCP servers and Claude Code plugins that let non-engineers ship safe production changes.",
    where: "InsuranceMarket.ae, internal",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Claude Code", "TypeScript", "Vercel", "GitHub API"],
    problem:
      "Small SEO and content changes (page metadata, schema markup, navigation links, llms.txt) needed a developer ticket every time, which slowed down QA and content teams.",
    built: [
      "MCP servers and Claude Code plugins that turn a plain-language request into a code change",
      "Every change creates a branch, builds a preview deployment and opens a pull request for review",
      "Foreman, an AI dev-agent plugin that goes from a requirements doc to a plan, full-stack code and a pull request",
      "A page-generation agent that turns structured content JSON into published pages",
    ],
    approach: [
      "Changes always go through a preview and a pull request, so a person reviews what the AI wrote before it ships",
      "Contributed to a multi-agent delivery pipeline: spec, plan, implementation, QA, security and performance review, then PR",
    ],
  },
  {
    slug: "business-insurance-platform",
    title: "Business insurance platform",
    category: "Web app",
    icon: "building",
    summary: "A journey for small businesses to compare covers and apply, built so new covers are configuration.",
    where: "InsuranceMarket.ae, UAE",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    links: { site: "https://insurancemarket.ae" },
    problem:
      "Businesses needed to compare and apply for many different covers, each with its own long application form, and new covers kept being added.",
    built: [
      "Lead form, cover picker, recommendations and multi-step application forms",
      "OTP-gated pages and routing based on the application's status for returning customers",
    ],
    approach: [
      "Config-driven, reusable form sections: a new cover is added with configuration instead of copied code, designed for 30+ covers",
      "Every dropdown is driven by backend lookup APIs, with payload contracts agreed with the backend team first",
    ],
  },
  {
    slug: "bahrain-website-and-crm",
    title: "Bahrain website and CRM",
    category: "Website and CRM",
    icon: "globe",
    summary: "A customer website for the Bahrain market and the internal CRM its team runs on.",
    where: "InsuranceMarket.ae, Bahrain",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Next.js", "NestJS", "TypeScript", "REST APIs"],
    problem:
      "The Bahrain business needed its own customer website, and an internal system where every team member sees only what their role allows.",
    built: [
      "The customer-facing website for the Bahrain market",
      "An internal CRM covering the workflow from lead intake to quotation and policy handling",
      "Role-based access control on both the interface and the API: screens, actions and data are scoped per role",
    ],
  },
  {
    slug: "crm-kit",
    title: "CRM Kit",
    category: "Developer tools",
    icon: "puzzle",
    summary: "A Claude Code plugin that builds a new CRM for any industry to one coding standard.",
    where: "Personal project",
    period: "2026",
    role: "Design and build",
    stack: ["Claude Code plugin", "Next.js 15", "Node.js", "Playwright"],
    links: { code: "https://github.com/AbdulSubhan1/crm-kit" },
    problem:
      "Building PolicyDesk to a strict standard took a lot of groundwork that had nothing to do with insurance. Starting the next product from scratch would mean doing it all again, and drifting from the standard.",
    built: [
      "A starter app with the UI library, access control, audit trail, languages, knowledge base and tests, and no business logic",
      "Skills that research the industry, write the knowledge base, check the coding standard, build module by module and test, stopping for approval at each step",
      "A sync-back step that brings generic improvements from every new CRM back into the kit",
    ],
    approach: [
      "Scripts do the mechanical work and have their own tests; a self-check fails if business words or broken references creep into the kit",
    ],
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
