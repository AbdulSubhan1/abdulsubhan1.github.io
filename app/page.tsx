import {
  ArrowRight,
  Bot,
  FileText,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Plug,
  Search,
  Smartphone,
  SquareMousePointer,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { BrandIcon } from "@/components/brand-icon";
import { CopyEmail } from "@/components/copy-email";
import { ProductFlow } from "@/components/product-flow";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { STACK, Tech } from "@/components/tech";
import { experience, profile, skills, stats, story } from "@/lib/data";
import { PROJECTS, projectBySlug } from "@/lib/projects";

// The range of work, each pointing at a project that shows it
const RANGE: { icon: LucideIcon; title: string; example: string; slug: string }[] = [
  { icon: SquareMousePointer, title: "Web apps", example: "Insurance purchase journeys", slug: "insurance-purchase-journeys" },
  { icon: LayoutDashboard, title: "Dashboards", example: "ERP for enterprise clients", slug: "erp-dashboards" },
  { icon: Smartphone, title: "Mobile apps", example: "Three-role food delivery app", slug: "food-delivery-app" },
  { icon: Search, title: "Content and SEO", example: "A 270+ page site that ranks", slug: "seo-content-platform" },
  { icon: Plug, title: "APIs and payments", example: "A payment gateway with webhooks", slug: "paysandbox" },
  { icon: Bot, title: "AI products", example: "CV matching with private AI", slug: "jobfit" },
];

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-strong";
const quietButton =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30";
const darkButton =
  "inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium transition-colors hover:border-white/50";
const lightButton =
  "inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-soft";

export default function Home() {
  const [featured, ...rest] = PROJECTS;

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-14 pb-20 md:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:pt-24 lg:pb-28"
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
              <a href="#projects" className={primaryButton}>
                See my projects
                <ArrowRight size={16} aria-hidden />
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

          <nav aria-labelledby="range" className="min-w-0 rounded-2xl border border-line bg-surface p-2 shadow-[0_24px_48px_-28px_rgb(16_32_27/0.25)]">
            <h2 id="range" className="px-4 pt-3 pb-2 text-sm font-medium text-muted">
              What I build
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {RANGE.map((item) => (
                <li key={item.title} className="min-w-0">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="group flex h-full items-start gap-3 rounded-xl p-4 transition-colors hover:bg-paper"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand-strong transition-colors group-hover:bg-brand group-hover:text-white">
                      <item.icon size={20} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-sm text-muted">{item.example}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Projects */}
        <section className="border-t border-line bg-surface/60">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-10 max-w-2xl">
              <h2 id="projects" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Projects
              </h2>
              <p className="mt-3 text-lg text-ink-soft">
                Products I built at work and on my own. Open any of them for the problem, what I built and how.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard project={featured} featured />
              {rest.map((project, i) => (
                // A card left alone on the last row of three stretches across it
                <ProjectCard
                  key={project.slug}
                  project={project}
                  wide={i === rest.length - 1 && (rest.length - 1) % 3 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Three of the projects run one journey together */}
        <section aria-labelledby="connected" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="mb-10 max-w-2xl">
            <h2 id="connected" className="text-3xl font-semibold tracking-tight md:text-4xl">
              Three apps, one working journey
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              A website, a CRM and a payment gateway I built separately, connected with signed APIs and webhooks. A quote
              asked for on one ends up as a paid policy in another.
            </p>
          </div>
          <ProductFlow />
        </section>

        {/* Story */}
        <section aria-labelledby="about" className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-20 md:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:py-28">
            <h2 id="about" className="text-3xl font-semibold tracking-tight lg:sticky lg:top-28 lg:self-start">
              How I got here
            </h2>
            <div className="min-w-0">
              <ScrollReveal
                parts={story}
                className="text-2xl leading-snug font-medium tracking-[-0.01em] text-balance md:text-[2rem] md:leading-[1.3]"
              />
              <dl className="mt-14 grid grid-cols-2 border-t border-line lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.value} className="min-w-0 border-b border-line py-6 pe-4 lg:border-b-0">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">
                        {stat.value}
                      </span>
                      <span aria-hidden className="mt-2 block text-sm leading-snug text-muted">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-muted">BS and MS in Computer Science, NED University of Engineering &amp; Technology</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <h2 id="experience" className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            Experience
          </h2>
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
                {job.projects && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.projects.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/projects/${slug}`}
                          className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft transition-colors hover:border-brand/40 hover:text-brand-strong"
                        >
                          {projectBySlug(slug)?.title}
                          <ArrowRight size={14} aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="border-y border-line bg-surface">
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
              Hiring a frontend or full‑stack engineer? I can start now.
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
