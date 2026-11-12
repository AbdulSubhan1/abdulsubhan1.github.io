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
  | "car"
  | "review";

export type Shot = { src: string; alt: string; width: number; height: number };

/** A recorded walkthrough of a live app, in public/: captions are part of the video, there is no sound. */
export type Video = { src: string; poster: string; title: string; duration: string };

/** The whole Brokwise → PolicyDesk → PaySandbox journey in one recording, shown on the home page. */
export const JOURNEY_VIDEO: Video = {
  src: "/videos/journey.mp4",
  poster: "/videos/journey-poster.webp",
  title: "One journey, three apps: a customer buys car insurance online",
  duration: "2:57",
};

/** One step of a "How it works" diagram. `stop` is what happens when this check ends the run early. */
export type FlowStep = {
  title: string;
  detail: string;
  stop?: { title: string; detail: string };
  /** Two possible endings shown side by side, the good one first. */
  outcomes?: [{ title: string; detail: string }, { title: string; detail: string }];
};

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
  /** A walkthrough video, shown above the screenshots. */
  video?: Video;
  problem: string;
  built: string[];
  /** How it was built: the decisions worth explaining in an interview. */
  approach?: string[];
  result?: string[];
  /** Shows the English/Arabic card on the project page. */
  bilingualDemo?: boolean;
  /** Part of the Brokwise → PolicyDesk → PaySandbox journey; shows how the three connect. */
  connected?: boolean;
  /** A designed project that isn't built yet: the page says so and reads as a design, not a shipped product. */
  design?: boolean;
  /** A step-by-step diagram of how it works. */
  flow?: { steps: FlowStep[]; note?: string };
  /** Example messages a user would see, to make the flow concrete. */
  samples?: { when: string; text: string }[];
  /** How someone would add it to their own setup. */
  setup?: { steps: string[]; snippet: string };
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
    video: {
      src: "/projects/policydesk/demo.mp4",
      poster: "/projects/policydesk/demo-poster.webp",
      title: "PolicyDesk walkthrough: roles, leads, a paid website lead, KYC and Arabic",
      duration: "2:23",
    },
    cover: {
      src: "/policydesk-lead.webp",
      alt: "PolicyDesk lead page: the customer paid $1,170 online on the website, the progress rail with Paid done, and the next step",
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
    video: {
      src: "/projects/brokwise/demo.mp4",
      poster: "/projects/brokwise/demo-poster.webp",
      title: "Brokwise walkthrough: the forms, prices from your answers, and review and pay",
      duration: "2:14",
    },
    cover: {
      src: "/projects/brokwise/home.webp",
      alt: "Brokwise home page: car, travel, home and health insurance, how it works, and the trust strip",
      width: 2880,
      height: 1800,
    },
    gallery: [
      {
        src: "/projects/brokwise/car.webp",
        alt: "Car plans priced from the customer's answers: insurer badges, Cheapest and Best value tags, add-ons, and the coordinator in the header",
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
    slug: "seo-content-platform",
    title: "InsuranceMarket.ae website",
    category: "Website",
    icon: "search",
    summary: "The company's bilingual Next.js website: moved to the App Router and next-intl, made faster, and given a sitemap built from its own routes.",
    where: "InsuranceMarket.ae, UAE",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Next.js", "TypeScript", "next-intl", "Tailwind CSS", "Headless WordPress", "Vercel"],
    links: { site: "https://insurancemarket.ae" },
    problem:
      "The main website had grown on the old Pages Router with content split across WordPress, translations wired by hand, and a sitemap that missed real pages. It had to work in English and Arabic and hand customers to a separate purchase app without feeling like two sites.",
    built: [
      "Moved about 25 pages from the Pages Router to the App Router, and from WordPress into Next.js",
      "Moved about 40 components and pages to next-intl, then Arabic versions of the car, travel and life pages with right-to-left layouts",
      "Next.js rewrites that send quote, sign-in and payment paths to the purchase app, so everything lives under one domain",
      "A sitemap generated from the site's own routes instead of WordPress: it found 12 pages the old one missed and went live with 139 working URLs",
    ],
    approach: [
      "The page wrapper became a Server Component and translations load once per request instead of on every render",
      "Images get srcsets sized to how big they really render, and unused API calls and needless client components were removed",
      "The build fails if the sitemap drops below 100 URLs, so a broken change can't quietly empty it",
      "Cache refresh is locale-aware, so updating an English page doesn't leave the Arabic one stale",
    ],
  },
  {
    slug: "bahrain-website-and-crm",
    title: "CRM access control (RBAC)",
    category: "CRM",
    icon: "shield",
    summary: "Role-based access for the Bahrain CRM: fewer, clearer permissions, scoped by product, checked on every page, API route and button.",
    where: "InsuranceMarket.ae, Bahrain",
    period: "2025 – 2026",
    role: "Frontend engineer",
    stack: ["Next.js", "TypeScript", "NextAuth", "REST APIs"],
    problem:
      "The CRM had about 94 permission codes, each tied to one insurance product, so every new product meant new codes and new checks. Some API checks demanded every listed permission instead of any one, and a missing permission logged people out instead of explaining why.",
    built: [
      "Moved the app to RBAC v2: about 94 product-specific codes became 29 generic action codes, with every check updated across 47 files",
      "Product scoping: roles can be limited to products and users to quote types, which hides the matching menus and actions",
      "Checks in three places: middleware for pages, middleware for API routes, and hooks that hide sections and buttons per product",
      "A permission-denied page that names what is missing, shown on a 403 instead of logging the user out",
      "Scoping fields on the existing user and role admin screens",
    ],
    approach: [
      "Permissions are owned by the backend; the app reads them for the signed-in user and keeps them in the session token",
      "The session refreshes permissions at most every five minutes, so a role change applies without signing out",
      "Fixed API checks to pass when the user has any one of the listed permissions, matching how pages already worked",
    ],
  },
  {
    slug: "page-generation",
    title: "AI page generation pipeline",
    category: "AI tooling",
    icon: "bot",
    summary: "Content and SEO people ask for a page in plain language; it comes back as a reviewed pull request with a live preview.",
    where: "InsuranceMarket.ae, internal",
    period: "2026",
    role: "Full-stack engineer, contributing to a team-built pipeline",
    stack: ["Claude Code", "MCP", "Next.js", "TypeScript", "Zod", "GitHub Actions", "Vercel"],
    problem:
      "Every new landing page needed a developer: copy, layout, routes, translations and SEO tags by hand. Content and SEO people waited in a ticket queue for pages that mostly reused the same building blocks.",
    built: [
      "A Claude Code plugin writes the page as structured content JSON, using house-style and authoring rules read live from the website's repo",
      "An MCP server on Vercel checks the address is free, commits the page on its own branch, runs a quality gate, deploys a preview and opens a pull request",
      "The website renders each page from a closed set of 36 section types, validated against one schema",
      "My part: new section types (payment options and tip callouts) and fixes across the pipeline, server and plugins",
    ],
    approach: [
      "Guardrails live in a server the AI cannot edit, not in prompts: a global deny list, protected branches and a per-workflow allowlist, where each layer can only narrow the one above",
      "The gate runs lint, type checks, schema validation and a placeholder check; the deployment itself is then checked, because a branch can pass and still fail to build",
      "Nothing merges without the requester's approval, and every action is logged against the person who asked for it",
      "Pages are data, not code: the AI picks from known sections, so it cannot invent a component",
    ],
    result: ["130+ pages shipped through it in under three months", "Up to 40 pages in a single day"],
  },
  {
    slug: "seo-plugin",
    title: "SEO self-service plugin",
    category: "AI tooling",
    icon: "globe",
    summary: "A Claude plugin that lets SEO people change metadata, schema, llms.txt and the navigation menu themselves, through a reviewed pull request.",
    where: "InsuranceMarket.ae, internal",
    period: "2026",
    role: "Full-stack engineer, building skills and the review flow",
    stack: ["Claude Code", "MCP", "OAuth 2.1", "TypeScript", "Vercel"],
    problem:
      "Small SEO changes, such as a page title, an FAQ schema, a menu link or the llms.txt file, each needed a developer ticket, which slowed the SEO team down.",
    built: [
      "The llms.txt skill: replace the file with a new version, preview it and open a pull request",
      "The navigation skill: add, remove, rename or reorder menu links in all four languages at once",
      "The review flow: every change gets its own branch and preview deployment, and its pull request goes to an integration branch that a developer promotes",
      "Website build settings so these branches get previews, and a business-insurance knowledge base for the read-only knowledge connector",
    ],
    approach: [
      "The AI can only touch an allowlist of files and has no merge or publish tool, so a person always ships the change",
      "Sign-in is OAuth 2.1 with PKCE on top of the company's Google accounts, checked on the server",
      "Skills reuse the server's existing tools instead of adding new ones, which kept each feature small",
    ],
  },
  {
    slug: "ai-developer-tooling",
    title: "AI dev agents",
    category: "Developer tools",
    icon: "bot",
    summary: "Claude Code plugins that take a feature from a requirements doc to a reviewed pull request.",
    where: "InsuranceMarket.ae, internal",
    period: "2024 – 2026",
    role: "Full-stack engineer",
    stack: ["Claude Code", "TypeScript", "Vercel", "GitHub API"],
    problem:
      "Turning a requirements doc into a plan, code and a pull request took the same manual steps every time, and reviews caught the same issues again and again.",
    built: [
      "Foreman, an AI dev-agent plugin that goes from a requirements doc to a plan, full-stack code and a pull request",
      "Contributions to a multi-agent delivery pipeline: spec, plan, implementation, QA, security and performance review, then PR",
    ],
    approach: ["Changes always go through a preview and a pull request, so a person reviews what the AI wrote before it ships"],
  },
  {
    slug: "firstpass",
    title: "FirstPass",
    category: "Developer tool · design",
    icon: "review",
    summary: "The design for an AI agent that gives every pull request a first review the moment you're asked to look at it.",
    where: "Personal project",
    period: "2026",
    role: "Design and architecture",
    stack: ["GitHub Actions", "TypeScript", "Vercel AI SDK", "Zod"],
    design: true,
    problem:
      "On a busy team, pull requests wait hours for a first look, and the first round of comments is nearly always the same: a repo rule that was missed, a leftover console.log, a merge conflict. The reviewer's time goes on things a machine could catch. FirstPass does that first pass the moment you are asked to review, so you open the PR to make the real call instead of pointing out the basics.",
    built: [
      "Starts when its owner is requested as a reviewer, when anyone comments /review on the PR, or when a re-review is requested after fixes",
      "Skips sync and release PRs (main → develop and develop → main), and asks the author to fix merge conflicts before it reviews anything",
      "Reviews the diff against the repo's own rules in AGENTS.md or CLAUDE.md and comments on the exact lines, each with a suggested fix",
      "Approves only when it finds nothing at all; one finding means it requests changes",
      "Posts a \"reviewing\" status when it starts and a ✅ or 🔴 summary when it ends, with lines reviewed and time taken, on the PR and optionally in Discord or Slack",
      "A weekly digest: PRs reviewed, how many were approved on the first try, and badges such as the Zero Comments Club",
    ],
    flow: {
      steps: [
        {
          title: "Triggered",
          detail: "The owner is requested as a reviewer, someone comments /review, or a re-review is requested after fixes. Anything else is ignored.",
        },
        {
          title: "Post a \"reviewing\" status",
          detail: "One comment on the PR, plus an optional Discord or Slack message, so the author knows it has started. Later updates edit this comment instead of adding new ones.",
        },
        {
          title: "Is it a sync or release PR?",
          detail: "The base and head branches are checked: main → develop and develop → main are merges of work that was already reviewed.",
          stop: { title: "Skip", detail: "Updates the status to say why, with no AI call" },
        },
        {
          title: "Does it have merge conflicts?",
          detail: "GitHub's mergeable state is read before anything else, because the diff of a conflicted PR is not what will be merged.",
          stop: { title: "Ask the author to fix them", detail: "Stops here; requesting a review again starts a fresh run" },
        },
        {
          title: "Gather the context",
          detail: "The diff, through the API, without checking out or running the PR's code. The repo's AGENTS.md or CLAUDE.md. Lockfiles, build output and generated files are left out.",
        },
        {
          title: "AI review",
          detail: "A free model picked by environment variables (Gemini or Groq) reads the rules and the diff, and returns findings in a fixed shape that's checked with Zod: file, line, problem and suggested fix. Large PRs are reviewed file by file to stay inside free-tier limits.",
        },
        {
          title: "Comment on the exact lines",
          detail: "Findings whose line isn't really part of the diff are dropped. The rest go out as one GitHub review, each one an inline comment with a suggested change the author can apply in one click.",
        },
        {
          title: "Verdict",
          detail: "The code counts the findings and decides. The model never chooses the verdict, so text inside a PR can't talk it into approving.",
          outcomes: [
            { title: "Zero findings: approve", detail: "\"✅ Approved, no notes.\"" },
            { title: "Any finding: request changes", detail: "\"🔴 3 things to fix.\"" },
          ],
        },
        {
          title: "Final summary",
          detail: "The status comment becomes the summary: verdict, lines reviewed, time taken and a link to the review, sent to Discord or Slack too.",
        },
      ],
      note: "Alongside: once a week a scheduled run counts the agent's reviews from the GitHub API and posts the digest, so no database is needed.",
    },
    samples: [
      { when: "When it starts", text: "⏳ Reviewing #42. Grabbing the diff and the house rules, back in a minute." },
      { when: "When there are conflicts", text: "⚠️ #42 has merge conflicts with develop. Please fix them and request a review again." },
      { when: "Approved", text: "✅ #42 approved. No notes. 🏅 Zero Comments Club · 23 changed lines reviewed in 44s" },
      { when: "Changes needed", text: "🔴 #42: 3 things to fix, see the comments on the lines. 117 changed lines reviewed in 1m 11s" },
      { when: "Weekly digest", text: "📊 This week: 9 PRs reviewed, 4 approved on the first try 🏆. Longest clean streak: 3 in a row 🔥" },
    ],
    approach: [
      "Triggered by asking a person, not a bot: GitHub doesn't let an ordinary bot be picked as a reviewer, so the agent listens for review requests sent to its owner. The team keeps its usual habit of tagging a reviewer",
      "Cheap checks before the AI: release PRs and conflicts are caught first, so no AI call or free-tier quota is spent on a PR that can't be reviewed yet",
      "The repo's own rules, not generic advice: reading AGENTS.md or CLAUDE.md makes comments match how that team writes code, and every repo can tune it by editing one file",
      "Approve only on zero findings: a strict bar keeps \"approved\" meaningful, and the verdict comes from code, not from the model",
      "Any free AI, set by environment variables: the same approach as JobFit, so switching from Gemini to Groq needs no code change",
      "A GitHub Action rather than a server: GitHub runs it for free on public repos, and the built-in token can comment and review, so there's nothing to host or pay for",
      "Safe with untrusted PRs: it reads the diff as data and never runs the PR's code, so a pull request can't run anything inside the workflow",
      "A first pass, not a gate: it doesn't build or run the app. A person still makes the final call",
    ],
    setup: {
      steps: [
        "Get a free AI key (for example from Google AI Studio for Gemini) and add it to the repo as a secret named AI_API_KEY",
        "Add the workflow below as .github/workflows/firstpass.yml, with your own GitHub username as the reviewer",
        "Write the repo's rules in AGENTS.md (or CLAUDE.md), then open a PR and request yourself as a reviewer",
      ],
      snippet: `name: FirstPass
on:
  pull_request:
    types: [review_requested]
  issue_comment:
    types: [created]

permissions:
  contents: read
  pull-requests: write

jobs:
  review:
    if: >
      github.event.requested_reviewer.login == 'AbdulSubhan1' ||
      (github.event.issue.pull_request && startsWith(github.event.comment.body, '/review'))
    uses: AbdulSubhan1/firstpass/.github/workflows/review.yml@v1
    with:
      ai-provider: google        # or groq
    secrets:
      AI_API_KEY: \${{ secrets.AI_API_KEY }}
      NOTIFY_WEBHOOK: \${{ secrets.DISCORD_WEBHOOK }}   # optional`,
    },
    result: [
      "Designed: triggers, the review flow, the messages and the setup are worked out",
      "Next: build it as a reusable GitHub Action and run it on my own repos (PolicyDesk, PaySandbox, JobFit and Brokwise)",
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
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
