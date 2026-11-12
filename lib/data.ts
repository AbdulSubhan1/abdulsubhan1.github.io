export const profile = {
  name: "Abdul Subhan",
  role: "Frontend-focused full-stack engineer",
  headline: "I build the web apps people pay through, in English and Arabic.",
  intro:
    "Five years of React, Next.js and Node.js. At InsuranceMarket.ae I built quote-to-payment journeys for 8 insurance products in the UAE. On my own I built a website, a CRM and a payment gateway that run one live journey together.",
  location: "Karachi, Pakistan",
  availability: "Available now: remote, GCC relocation or Karachi hybrid",
  email: "abdul.subhan.durrani@gmail.com",
  whatsapp: "https://wa.me/923472708421",
  linkedin: "https://linkedin.com/in/abdul-subhan-059281188",
  github: "https://github.com/AbdulSubhan1",
  cv: "/Abdul-Subhan-CV.pdf",
};

/** The company work on the home page: one real number each, pointing at the case study behind it. */
export const workHighlights: { value: string; label: string; slug: string }[] = [
  { value: "8", label: "insurance products customers buy online through journeys I built", slug: "insurance-purchase-journeys" },
  { value: "130+", label: "pages shipped in three months through an AI page pipeline I worked on", slug: "page-generation" },
  { value: "139", label: "working URLs in the English and Arabic website, in a sitemap I rebuilt from its routes", slug: "seo-content-platform" },
  { value: "94 → 29", label: "CRM permission codes after I moved it to role-based access", slug: "bahrain-website-and-crm" },
];

export const experience: { role: string; company: string; period: string; summary: string; projects?: string[] }[] = [
  {
    role: "Frontend-focused full-stack engineer",
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
