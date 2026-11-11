export const profile = {
  name: "Abdul Subhan",
  role: "Frontend and full-stack engineer",
  headline: "I build web and mobile products end to end, from the first screen to the API behind it.",
  intro:
    "Shipping React, Next.js and Node.js products since 2021: online purchase journeys, enterprise dashboards, a food delivery app, content sites that rank, and the AI tools that help teams ship. In English and Arabic.",
  location: "Karachi, Pakistan",
  availability: "Available now: remote, GCC relocation or Karachi hybrid",
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

export const experience: { role: string; company: string; period: string; summary: string; projects?: string[] }[] = [
  {
    role: "Frontend and full-stack engineer",
    company: "InsuranceMarket.ae (Alfred Holdings)",
    period: "Mar 2024 – Nov 2026",
    summary: "Insurtech for the UAE and Bahrain: purchase journeys, a business insurance platform, content sites, a CRM and AI tooling.",
    projects: ["insurance-purchase-journeys", "business-insurance-platform", "seo-content-platform", "bahrain-website-and-crm", "ai-developer-tooling"],
  },
  {
    role: "Frontend Engineer",
    company: "Finosys",
    period: "Feb 2023 – Mar 2024",
    summary: "Enterprise ERP dashboards (procurement, HR) and reusable React components for clients including Dawlance.",
    projects: ["erp-dashboards"],
  },
  {
    role: "React Native Developer",
    company: "Chaynz Tech",
    period: "Jul 2022 – Jan 2023",
    summary: "Multi-role food delivery app (vendor, customer, rider) with maps, push notifications and QR.",
    projects: ["food-delivery-app"],
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
