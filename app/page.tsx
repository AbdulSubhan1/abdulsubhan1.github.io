import { ArrowRight, ArrowUpRight, Download, FileText, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BrandIcon } from "@/components/brand-icon";
import { CopyEmail } from "@/components/copy-email";
import { ProductFlow } from "@/components/product-flow";
import { ProjectIcon } from "@/components/project-icon";
import { ProjectLinks } from "@/components/project-links";
import { SiteHeader } from "@/components/site-header";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { STACK, Tech } from "@/components/tech";
import { experience, profile, skills, workHighlights } from "@/lib/data";
import { PROJECTS, projectBySlug } from "@/lib/projects";

// The journey section shows the three connected apps; these two live projects sit under it
const ALSO_LIVE = ["jobfit", "crm-kit"];
// Everything not shown in the first sections goes in "More work", in the order of PROJECTS
const SHOWN = new Set([
  ...PROJECTS.filter((p) => p.connected).map((p) => p.slug),
  ...ALSO_LIVE,
  ...workHighlights.map((h) => h.slug),
]);

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-strong";
const quietButton =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30";
const darkButton =
  "inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium transition-colors hover:border-white/50";
const lightButton =
  "inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-soft";
const inlineLink = "font-medium text-brand-strong underline-offset-4 hover:underline";

export default function Home() {
  const alsoLive = ALSO_LIVE.map((slug) => projectBySlug(slug)!);
  const moreWork = PROJECTS.filter((p) => !SHOWN.has(p.slug));

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero: who he is, what he's best at, and the live journey as the first thing to look at */}
        <section
          id="top"
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pt-14 pb-20 md:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pt-24 lg:pb-28"
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
                See the live journey
                <ArrowRight size={16} aria-hidden />
              </a>
              <a href={profile.cv} download className={quietButton}>
                <Download size={16} aria-hidden />
                Download CV
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={quietButton}>
                <MessageCircle size={16} aria-hidden />
                WhatsApp
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

          {/* The website and the checkout of the journey below; on phones the journey section shows them instead */}
          <figure className="relative hidden min-w-0 pb-16 ps-10 lg:block">
            <Image
              src="/projects/brokwise/car.webp"
              alt="Brokwise, my demo insurance website, asking for car insurance details"
              width={2880}
              height={1800}
              priority
              sizes="40vw"
              className="w-full rounded-xl border border-line shadow-[0_24px_48px_-28px_rgb(16_32_27/0.35)]"
            />
            <Image
              src="/projects/paysandbox/checkout.webp"
              alt="PaySandbox, my payment gateway, taking the payment on its hosted checkout"
              width={2880}
              height={1800}
              sizes="25vw"
              className="absolute bottom-0 start-0 w-1/2 rounded-xl border border-line shadow-[0_24px_48px_-20px_rgb(16_32_27/0.45)]"
            />
            <figcaption className="absolute end-0 bottom-2 w-[45%] text-sm leading-snug text-muted">
              Three live apps I built: Brokwise → PolicyDesk → PaySandbox
            </figcaption>
          </figure>
        </section>

        {/* The strongest proof first: one journey across three live apps */}
        <section aria-labelledby="projects" className="border-t border-line bg-surface/60">
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-medium text-brand-strong">Live, try it</p>
              <h2 id="projects" className="mt-2 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Buy car insurance end to end, across three apps I built
              </h2>
              <p className="mt-3 text-lg text-ink-soft">
                A website, a CRM and a payment gateway. Each is its own app with its own code, connected by signed APIs and
                webhooks. Ask for a quote, pick a plan and pay with a test card.
              </p>
            </div>
            <ProductFlow shots />

            <h3 className="mt-16 text-sm font-medium text-muted">Also live</h3>
            <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {alsoLive.map((project) => (
                <li key={project.slug} className="flex min-w-0 gap-4 rounded-2xl border border-line bg-surface p-5">
                  <ProjectIcon name={project.icon} />
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {project.title} <span className="font-normal text-muted">· {project.category}</span>
                    </p>
                    <p className="mt-1 text-ink-soft">{project.summary}</p>
                    <div className="mt-3">
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The company work, one number each */}
        <section aria-labelledby="work" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium text-brand-strong">2024 – 2026</p>
            <h2 id="work" className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              At InsuranceMarket.ae
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Insurtech for the UAE and Bahrain, in English and Arabic. This is company work, so there is no public demo; the
              customer side is live on{" "}
              <a href="https://insurancemarket.ae" target="_blank" rel="noreferrer" className={inlineLink}>
                insurancemarket.ae
              </a>
              , and each case study shows what I built and how.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workHighlights.map((item) => (
              <li key={item.slug} className="min-w-0">
                <Link
                  href={`/projects/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-[border-color,box-shadow] hover:border-ink/25 hover:shadow-[0_20px_40px_-24px_rgb(16_32_27/0.3)]"
                >
                  <span className="text-4xl font-semibold tracking-tight tabular-nums">{item.value}</span>
                  <span className="mt-2 text-sm leading-snug text-ink-soft">{item.label}</span>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-brand-strong">
                    {projectBySlug(item.slug)?.title}
                    <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* The rest, one line each */}
        <section aria-labelledby="more" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 id="more" className="text-2xl font-semibold tracking-tight">
              More work
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {moreWork.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4"
                  >
                    <ProjectIcon name={project.icon} />
                    <span className="min-w-0">
                      <span className="block font-semibold">{project.title}</span>
                      <span className="block text-sm text-muted">
                        {project.where} · {project.period}
                      </span>
                      <span className="mt-1 block text-sm text-ink-soft">{project.summary}</span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      aria-hidden
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ul>
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
          <p className="mt-10 text-sm text-muted">BS and MS in Computer Science, NED University of Engineering &amp; Technology</p>
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
