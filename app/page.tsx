import {
  ArrowUpRight,
  Bot,
  Building2,
  Download,
  FileText,
  Gauge,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import {
  siAnthropic,
  siDrizzle,
  siI18next,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import { BrandIcon } from "@/components/brand-icon";
import { CopyEmail } from "@/components/copy-email";
import { DirectionDemo } from "@/components/direction-demo";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { about, caseStudies, experience, profile, projects, skills, type CaseIcon } from "@/lib/data";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const CASE_ICONS: Record<CaseIcon, LucideIcon> = {
  bot: Bot,
  shield: ShieldCheck,
  building: Building2,
  cart: ShoppingCart,
  gauge: Gauge,
};

// Logos for the technologies a hiring manager scans for first
const STACK: SimpleIcon[] = [siNextdotjs, siReact, siTypescript, siTailwindcss, siNodedotjs, siNestjs, siPostgresql];

const TECH_LOGOS: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  "Next.js 15": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  PostgreSQL: siPostgresql,
  Drizzle: siDrizzle,
  Vercel: siVercel,
  "Headless WordPress": siWordpress,
  "Redux Toolkit": siRedux,
  "next-intl": siI18next,
  "next-intl (RTL)": siI18next,
  "i18n (RTL)": siI18next,
  "Claude Code": siAnthropic,
  "Claude Code plugin": siAnthropic,
  "Claude Code plugins": siAnthropic,
};

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-strong";
const quietButton =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30";
const darkButton =
  "inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium transition-colors hover:border-white/50";
const lightButton =
  "inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-soft";

function Tech({ name, dark }: { name: string; dark?: boolean }) {
  const logo = TECH_LOGOS[name];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${
        dark ? "bg-white/10 text-white/80" : "bg-paper text-ink-soft"
      }`}
    >
      {logo && <BrandIcon icon={logo} size={13} mono={dark} />}
      {name}
    </span>
  );
}

function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}

export default function Home() {
  const [policyDesk, crmKit] = projects;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-semibold" aria-label="Abdul Subhan, back to top">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm font-bold text-paper">AS</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <nav aria-label="Sections" className="hidden gap-7 text-sm text-ink-soft md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={profile.cv} download className={primaryButton}>
            <Download size={16} aria-hidden />
            Download CV
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-14 pb-20 md:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:pt-24 lg:pb-28"
        >
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <MapPin size={16} aria-hidden />
              {profile.name}, {profile.role.toLowerCase()} in {profile.location}
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.5rem]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={policyDesk.live} target="_blank" rel="noreferrer" className={primaryButton}>
                Try PolicyDesk live
                <ArrowUpRight size={16} aria-hidden />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={quietButton}>
                <MessageCircle size={16} aria-hidden />
                Message on WhatsApp
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              {profile.availability}
            </p>

            <ul aria-label="Main stack" className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-ink-soft">
              {STACK.map((icon) => (
                <li key={icon.slug} className="flex items-center gap-2 text-sm">
                  <BrandIcon icon={icon} size={18} mono />
                  <span>{icon.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <DirectionDemo />
        </section>

        {/* About */}
        <section aria-labelledby="about" className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <h2 id="about" className="text-3xl font-semibold tracking-tight">
              How I work
            </h2>
            <div className="grid max-w-[68ch] gap-4 text-lg leading-relaxed text-ink-soft">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <SectionHeading
            id="work"
            title="Selected work"
            intro="Products I built at InsuranceMarket.ae, each with the problem it solved."
          />
          <div className="divide-y divide-line border-y border-line">
            {caseStudies.map((cs) => {
              const Icon = CASE_ICONS[cs.icon];
              return (
                <article
                  key={cs.title}
                  className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-12"
                >
                  <div className="min-w-0">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-strong">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">{cs.title}</h3>
                    <p className="mt-1 text-sm text-muted">{cs.context}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cs.stack.map((s) => (
                        <Tech key={s} name={s} />
                      ))}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg leading-relaxed text-ink">{cs.problem}</p>
                    <ul className="mt-5 grid gap-3 text-ink-soft">
                      {cs.built.map((b) => (
                        <li key={b} className="flex gap-3 leading-relaxed">
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {cs.link && (
                      <a
                        href={cs.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-strong hover:underline"
                      >
                        {cs.link.label}
                        <ArrowUpRight size={15} aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section className="bg-night text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 id="projects" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Projects you can open
              </h2>
              <p className="mt-3 text-lg text-white/70">Built on my own time, public on GitHub.</p>
            </div>

            <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold tracking-tight">{policyDesk.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{policyDesk.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {policyDesk.stack.map((s) => (
                    <Tech key={s} name={s} dark />
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={policyDesk.live} target="_blank" rel="noreferrer" className={lightButton}>
                    Open the live demo
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                  <a href={policyDesk.code} target="_blank" rel="noreferrer" className={darkButton}>
                    <GitHubIcon size={16} />
                    Source code
                  </a>
                </div>
              </div>

              <a
                href={policyDesk.live}
                target="_blank"
                rel="noreferrer"
                className="group block min-w-0"
                aria-label="Open the PolicyDesk live demo"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ms-3 truncate text-xs text-white/50">policydesk-opal.vercel.app</span>
                  </div>
                  <Image
                    src="/policydesk-lead.webp"
                    alt="PolicyDesk lead page: progress from quote to paid, quotes from two insurers, and the customer card"
                    width={2880}
                    height={1060}
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
              </a>
            </article>

            <article className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold tracking-tight">{crmKit.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{crmKit.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {crmKit.stack.map((s) => (
                    <Tech key={s} name={s} dark />
                  ))}
                </div>
                <a href={crmKit.code} target="_blank" rel="noreferrer" className={`mt-7 ${darkButton}`}>
                  <GitHubIcon size={16} />
                  Source code
                </a>
              </div>
              <div className="min-w-0 self-center rounded-xl border border-white/10 bg-black/30 p-5 text-sm leading-7">
                <p className="text-white/50">In Claude Code:</p>
                <p className="mt-1 overflow-x-auto whitespace-nowrap text-white">
                  <span className="text-brand-soft/70">› </span>/plugin install crm-kit --marketplace AbdulSubhan1/crm-kit
                </p>
                <p className="mt-1 text-white">
                  <span className="text-brand-soft/70">› </span>Use the CRM kit to build a CRM for gyms
                </p>
                <ol className="mt-4 grid gap-1 border-t border-white/10 pt-4 text-white/70">
                  {[
                    "Researches the industry's products and screens",
                    "Writes the business knowledge base, with sources",
                    "Checks the coding standard against current guidance",
                    "Builds module by module, then tests every role",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="w-4 shrink-0 text-end text-white/40 tabular-nums">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <SectionHeading id="experience" title="Experience" />
          <ol className="relative grid gap-10 border-s border-line ps-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  aria-hidden
                  className="absolute -start-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-brand ring-1 ring-brand"
                />
                <p className="text-sm text-muted">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.role}, <span className="text-ink-soft">{job.company}</span>
                </h3>
                <p className="mt-1 max-w-[68ch] text-ink-soft">{job.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 id="skills" className="mb-8 text-3xl font-semibold tracking-tight">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="min-w-0">
                  <h3 className="font-semibold">{group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <li key={s}>
                        <Tech name={s} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-night text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <h2
              id="contact"
              className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl"
            >
              Hiring for frontend or full‑stack? I can start now.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              The fastest way to reach me is WhatsApp. Email works too, and my CV has the details.
            </p>
            <div className="mt-8">
              <CopyEmail email={profile.email} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={lightButton}>
                <MessageCircle size={16} aria-hidden />
                WhatsApp
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={darkButton}>
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className={darkButton}>
                <GitHubIcon size={16} />
                GitHub
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer" className={darkButton}>
                <FileText size={16} aria-hidden />
                View CV
              </a>
            </div>
          </div>
          <footer className="border-t border-white/10">
            <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/50 md:px-6">
              Built by me with Next.js and Tailwind CSS.{" "}
              <a
                href="https://github.com/AbdulSubhan1/abdulsubhan1.github.io"
                className="underline hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Source on GitHub
              </a>
              .
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
