export const profile = {
  name: "Abdul Subhan",
  role: "Full-Stack Engineer",
  tagline: "Next.js · NestJS · TypeScript · AI Agents & MCP Tooling",
  intro:
    "I build insurtech platforms end to end, from purchase journeys and CRMs to the AI developer tools that help teams ship faster.",
  location: "Karachi, Pakistan",
  availability: "Open to remote, GCC relocation, or Karachi hybrid. Available immediately.",
  email: "abdul.subhan.durrani@gmail.com",
  whatsapp: "https://wa.me/923472708421",
  linkedin: "https://linkedin.com/in/abdul-subhan-059281188",
  github: "https://github.com/AbdulSubhan1",
  cv: "/Abdul-Subhan-CV.pdf",
};

export const about = [
  "I'm a full-stack engineer with 3+ years of experience shipping production products in insurtech and enterprise software. Most recently at InsuranceMarket.ae, I worked across the UAE and Bahrain markets: customer purchase journeys, a business insurance platform, and an internal CRM with role-based access control.",
  "I care about owning a feature from start to finish: clarifying requirements, agreeing API contracts with backend teams, building the UI and services, and seeing it through deploys and production issues. Lately I've focused on AI tooling: MCP servers and agent plugins that let non-engineers make safe production changes.",
  "I hold a BS and MS in Computer Science from NED University of Engineering & Technology.",
];

export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  built: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    title: "AI developer tooling: MCP servers & agent plugins",
    context: "InsuranceMarket.ae · Internal tooling",
    problem:
      "Small SEO and content changes (page metadata, schema, navigation links, llms.txt) needed a developer ticket every time, which slowed down QA and content teams.",
    built: [
      "MCP (Model Context Protocol) server and Claude Code plugin that turn a plain-language request into a code change",
      "Every change automatically creates a branch, builds a preview deployment and opens a pull request for review",
      "Foreman: an AI dev-agent plugin that goes from requirements doc → plan → full-stack code → PR",
      "A page-generation agent that turns structured content JSON into published pages",
    ],
    stack: ["MCP", "Claude Code", "TypeScript", "Vercel", "GitHub API"],
  },
  {
    title: "Bahrain website & CRM with RBAC",
    context: "InsuranceMarket.ae · Bahrain market",
    problem:
      "The Bahrain business needed its own customer website and an internal CRM where every team member sees only what their role allows.",
    built: [
      "Customer-facing website for the Bahrain market",
      "Internal CRM covering the business workflow from lead intake to quotation and policy handling",
      "Role-based access control enforced on both the UI and the API: screens, actions and data are scoped per role",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "RBAC", "REST APIs"],
  },
  {
    title: "Business (SME) insurance platform",
    context: "InsuranceMarket.ae · UAE",
    problem:
      "Businesses needed to compare and apply for many different covers, each with its own long application form, and new covers kept being added.",
    built: [
      "Lead form, cover picker, recommendations and multi-step application forms",
      "Config-driven, reusable form sections, so a new cover is added with configuration instead of forked code (designed for 30+ covers)",
      "All dropdowns driven by backend lookup APIs, with clear payload contracts agreed with the backend team",
      "OTP-gated pages and status-based routing for returning customers",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Yup", "REST APIs"],
    link: { label: "insurancemarket.ae", href: "https://insurancemarket.ae" },
  },
  {
    title: "Insurance purchase journeys for 8 lines of business",
    context: "InsuranceMarket.ae · UAE",
    problem:
      "Customers needed to get quotes, compare plans and buy policies online across many insurance products, each with insurer integrations and compliance checks.",
    built: [
      "End-to-end purchase flows for car, travel, home, health, savings, life, cyber and smartphone insurance",
      "Node.js/NestJS services for lead submission, plan display, add-ons and online payment",
      "Third-party insurer API integrations and KYC/AML checks before policy issuance",
      "CRM-linked document upload with AI-powered OCR that pre-fills customer details",
    ],
    stack: ["Next.js", "Node.js", "NestJS", "Payments", "OCR"],
    link: { label: "insurancemarket.ae", href: "https://insurancemarket.ae" },
  },
  {
    title: "SEO & performance platform",
    context: "InsuranceMarket.ae · Content + transactional apps",
    problem:
      "Marketing needed fast, indexable landing pages for every product, connected seamlessly to the transactional app.",
    built: [
      "270+ page content site on headless WordPress with ISR and on-demand revalidation",
      "Next.js rewrites to join the content site and the app under one domain, plus an automated sitemap",
      "Migrated Next.js 12 → 15, added next-intl (English/Arabic, RTL) and improved Core Web Vitals",
    ],
    stack: ["Next.js", "Headless WordPress", "ISR", "next-intl", "Core Web Vitals"],
  },
];

export const projects = [
  {
    title: "PolicyDesk",
    description:
      "An insurance brokerage CRM: inquiries become leads, advisors quote from insurer plans, compliance runs KYC/AML, finance records payments and policies come back as renewals. Database-driven RBAC with department and own-record scopes, English and Arabic (RTL), its own 54-component UI library and Playwright tests. Sign in as any of seven roles with one click.",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle", "RBAC", "i18n (RTL)", "Playwright"],
    live: "https://policydesk-opal.vercel.app/login",
    code: "https://github.com/AbdulSubhan1/policydesk",
  },
];

export const experience = [
  {
    role: "Full-Stack Engineer",
    company: "InsuranceMarket.ae (Alfred Holdings)",
    period: "Mar 2024 – Nov 2026",
    summary: "Insurtech across UAE & Bahrain: purchase journeys, business insurance, CRM with RBAC, AI tooling.",
  },
  {
    role: "Frontend Engineer",
    company: "Finosys",
    period: "Feb 2023 – Mar 2024",
    summary: "Enterprise ERP dashboards (procurement, HR) and reusable React components for clients including Dawlance.",
  },
  {
    role: "React Native Developer",
    company: "Chaynz Tech",
    period: "Jul 2022 – Jan 2023",
    summary: "Multi-role food delivery app (vendor, customer, rider) with maps, push notifications and QR.",
  },
  {
    role: "Frontend Intern",
    company: "Linkit Soft",
    period: "Jun 2021 – Nov 2021",
    summary: "Production UI modules with React, Redux and Tailwind CSS.",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "React Native", "next-intl (RTL)"],
  Backend: ["Node.js", "NestJS", "REST APIs", "RBAC", "CRM systems", "Payments", "KYC/AML", "Third-party integrations"],
  "AI & automation": ["MCP servers", "Claude Code plugins", "LLM agent workflows", "Multi-agent pipelines", "AI OCR"],
  "SEO & platform": ["Technical SEO", "Core Web Vitals", "ISR", "Headless WordPress", "Vercel", "Playwright"],
};
