// Every project in the portfolio. Each entry gets a card on the home page and its own page at /projects/<slug>.
// To add a new project, add an entry here (and its screenshots to public/projects/<slug>/).

export type ProjectIcon =
  | "shield"
  | "cart"
  | "layout"
  | "smartphone"
  | "search"
  | "bot"
  | "building"
  | "globe"
  | "puzzle"
  | "card"
  | "scan"
  | "car";

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
  /** Part of the Brokwise → PolicyDesk → PaySandbox journey; shows how the three connect. */
  connected?: boolean;
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
      "A signed website API, so Brokwise can create leads, price plans and take payments through PaySandbox",
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
    connected: true,
    featured: true,
  },
  {
    slug: "paysandbox",
    title: "PaySandbox",
    category: "Payment gateway",
    icon: "card",
    summary: "Stripe-style test mode as a product: a real checkout, webhooks, refunds and disputes for demos and MVPs, with no real money.",
    where: "Personal project",
    period: "2026",
    role: "Product design, full-stack build, testing and deployment",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Better Auth", "Upstash QStash", "Playwright", "Vercel"],
    links: {
      live: "https://paysandbox.vercel.app",
      code: "https://github.com/AbdulSubhan1/paysandbox",
    },
    cover: {
      src: "/projects/paysandbox/checkout.webp",
      alt: "PaySandbox hosted checkout: the order on the left, the card form and clickable test cards on the right, under a test mode banner",
      width: 2880,
      height: 1800,
    },
    gallery: [
      {
        src: "/projects/paysandbox/dashboard.webp",
        alt: "Merchant dashboard: volume, failed and disputed totals, payments by status, recent payments and webhooks",
        width: 2880,
        height: 1800,
      },
      {
        src: "/projects/paysandbox/payments.webp",
        alt: "Payments list with status filters, the card used and the payment ID",
        width: 2880,
        height: 1800,
      },
    ],
    problem:
      "Demo sites and side projects need a payment step that behaves like the real thing: a hosted checkout, declined cards, OTP, webhooks and refunds. Getting test keys from a real gateway usually needs a registered business, so most portfolios fake a \"Payment successful\" page, which proves nothing.",
    built: [
      "A hosted checkout on PaySandbox's own URL with a permanent test mode banner, and test cards for success, declines, expired cards and 3-D Secure OTP",
      "A REST API with secret keys, Idempotency-Key support, daily usage caps and an OpenAPI 3.1 spec",
      "Signed webhooks for payments, refunds and disputes, retried on a schedule and paused after repeated failures",
      "A merchant dashboard: totals, payments with a timeline each, partial refunds, simulated disputes, customers, a webhook log with resend and an API request log",
      "Invite-only GitHub sign-in, with up to three projects per account",
    ],
    approach: [
      "Card numbers that look real are refused in the browser and again on the server, so nobody can type in a real card by mistake",
      "Idempotency keys make retries safe: the same request sent twice gives the same result instead of a second charge",
      "Webhooks follow the Standard Webhooks spec; each event keeps the same ID across retries, so receivers can drop duplicates. Timers and retries run on Upstash QStash",
      "Built in stages (the payment loop, then webhooks, refunds and disputes, then the dashboard), each one reviewed and tested before merging",
    ],
    result: [
      "Live on Vercel with Neon Postgres; 400+ unit tests and Playwright suites for desktop and mobile run in CI",
      "Brokwise, my demo insurance website, takes its payments through it",
    ],
    connected: true,
  },
  {
    slug: "jobfit",
    title: "JobFit",
    category: "AI web app",
    icon: "scan",
    summary: "Paste a job post, drop your CV, and see your match score and missing skills, with AI help that never sees your personal details.",
    where: "Personal project",
    period: "2026",
    role: "Design, frontend, AI integration and deployment",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Auth.js", "Upstash Redis", "next-intl", "Playwright"],
    links: {
      live: "https://jobfit-tan.vercel.app",
      code: "https://github.com/AbdulSubhan1/jobfit",
    },
    cover: {
      src: "/projects/jobfit/home.webp",
      alt: "JobFit home page: \"Does your CV fit the job?\" with a sample 72% match card",
      width: 2880,
      height: 1800,
    },
    gallery: [
      {
        src: "/projects/jobfit/result.webp",
        alt: "A sample result: 69% match, the skills found and missing, and an AI cover letter",
        width: 2880,
        height: 1800,
      },
    ],
    problem:
      "Job seekers send the same CV everywhere without knowing which skills a job's screening looks for. AI tools can help, but most want the whole CV, with name, phone and address, sent to their servers.",
    built: [
      "A match score and the missing skills, worked out in the browser: the PDF is read on the user's device and never uploaded",
      "AI-rewritten CV bullets, a cover letter and interview prep for signed-in users, streamed as they are written",
      "Masking before the AI: name, email, phone, address, links and ID numbers become tags like [EMAIL-1]; users can hide any other word, and the real values come back only on their own screen",
      "Google or GitHub sign-in, with a daily AI limit per user",
      "English and Arabic, and its own UI library, browsable inside the app",
    ],
    approach: [
      "The AI provider is configuration, not code: one adapter on the Vercel AI SDK switches between Gemini, Groq, OpenAI, Anthropic or a local Ollama with two environment variables",
      "The server checks every AI request again and rejects it if it still contains an email, phone number or link",
      "No database of CVs: the only stored state is a daily counter per user in Upstash Redis",
      "Runs on free tiers end to end",
    ],
    result: ["Live on Vercel; the match score and a full sample work without signing in"],
  },
  {
    slug: "brokwise",
    title: "Brokwise",
    category: "Website",
    icon: "car",
    summary: "A demo insurance broker website that sells car insurance through PolicyDesk and takes payment with PaySandbox.",
    where: "Personal project",
    period: "2026",
    role: "Design, frontend, integration and deployment",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: { live: "https://brokwise.vercel.app" },
    cover: {
      src: "/projects/brokwise/home.webp",
      alt: "Brokwise home page: \"Insurance, the wise way\", with car insurance open and other lines coming soon",
      width: 2880,
      height: 1800,
    },
    gallery: [
      {
        src: "/projects/brokwise/car.webp",
        alt: "Car insurance: choose \"Get prices now\" or \"Call me back\"",
        width: 2880,
        height: 1800,
      },
    ],
    problem:
      "PolicyDesk and PaySandbox each worked on their own, but a CRM and a payment gateway only prove themselves when a real customer journey runs through both: a visitor asks for a quote, the team follows up, and a payment closes the sale.",
    built: [
      "A car insurance journey: \"Get prices now\" or \"Call me back\", a full or short form, plans with add-ons and a live total, then payment and a thank-you page",
      "Every form creates records in PolicyDesk through its private website API, which assigns a coordinator automatically",
      "Plans and prices come from PolicyDesk, and the chosen plan is saved there as a quote",
      "Payment opens PaySandbox's hosted checkout; once the webhook arrives, the thank-you page shows the paid order and the advisor assigned",
    ],
    approach: [
      "The website has no database: every call to PolicyDesk is a signed server-to-server request, and the visitor's progress is kept in a signed, http-only cookie",
      "PolicyDesk, not the website, talks to PaySandbox and receives its webhook, so the payment is recorded where the team works",
      "Every person, insurer and number on the site is made up",
    ],
    result: ["Live on Vercel, connected to the live PolicyDesk and PaySandbox"],
    connected: true,
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
