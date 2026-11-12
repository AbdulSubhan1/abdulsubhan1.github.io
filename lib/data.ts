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

/** The story on the home page; highlighted parts light up in the brand colour as you scroll. */
export const story: { text: string; highlight?: boolean }[] = [
  { text: "I started in 2021 building UI modules as an intern. Since then I've built" },
  { text: "a food delivery app", highlight: true },
  { text: "for customers, vendors and riders," },
  { text: "ERP dashboards", highlight: true },
  { text: "for enterprise teams, and at InsuranceMarket.ae" },
  { text: "the journeys people buy insurance through,", highlight: true },
  { text: "in English and Arabic. I own a feature from the first conversation to production, and lately I also build" },
  { text: "the AI tools", highlight: true },
  { text: "that help a team ship it." },
];

/** Real numbers from shipped work, each with what it counts. */
export const stats: { value: string; label: string }[] = [
  { value: "8", label: "insurance products customers buy online through flows I built" },
  { value: "130+", label: "pages shipped in three months through an AI page pipeline I worked on" },
  { value: "30+", label: "insurance covers served by one config-driven form system" },
  { value: "2021", label: "the year I shipped my first production UI" },
];

export const experience: { role: string; company: string; period: string; summary: string; projects?: string[] }[] = [
  {
    role: "Frontend and full-stack engineer",
    company: "InsuranceMarket.ae (Alfred Holdings)",
    period: "Mar 2024 – Nov 2026",
    summary: "Insurtech for the UAE and Bahrain: purchase journeys, a business insurance platform, content sites, a CRM and AI tooling.",
    projects: [
      "insurance-purchase-journeys",
      "business-insurance-platform",
      "seo-content-platform",
      "page-generation",
      "seo-plugin",
      "bahrain-website-and-crm",
      "ai-developer-tooling",
    ],
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
