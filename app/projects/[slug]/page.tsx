import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, CalendarDays, Globe, UserRound } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectionDemo } from "@/components/direction-demo";
import { ProductFlow } from "@/components/product-flow";
import { ProjectIcon } from "@/components/project-icon";
import { SiteHeader } from "@/components/site-header";
import { GitHubIcon } from "@/components/social-icons";
import { Tech } from "@/components/tech";
import { profile } from "@/lib/data";
import { PROJECTS, projectBySlug, type Shot } from "@/lib/projects";

// A static site: one page per project, built ahead of time
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Abdul Subhan`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: project.cover ? [project.cover.src] : [] },
  };
}

function Screenshot({ shot, caption }: { shot: Shot; caption?: string }) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_48px_-28px_rgb(16_32_27/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="block h-auto w-full" />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-12">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="min-w-0 max-w-[68ch] text-lg leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();

  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const { links } = project;

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article>
          <header className="mx-auto max-w-6xl px-4 pt-10 pb-12 md:px-6 lg:pt-14">
            <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink">
              <ArrowLeft size={16} aria-hidden />
              All projects
            </Link>
            <div className="mt-8 flex items-start gap-5">
              <ProjectIcon name={project.icon} size="lg" />
              <div className="min-w-0">
                <p className="text-sm text-muted">{project.category}</p>
                <h1 className="mt-1 text-4xl font-semibold tracking-[-0.02em] text-balance md:text-5xl">{project.title}</h1>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft">{project.summary}</p>

            <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              {[
                { icon: Briefcase, label: "For", value: project.where },
                { icon: UserRound, label: "My role", value: project.role },
                { icon: CalendarDays, label: "When", value: project.period },
              ].map((item) => (
                <div key={item.label} className="flex min-w-0 gap-3 rounded-xl border border-line bg-surface p-4">
                  <item.icon size={18} aria-hidden className="mt-0.5 shrink-0 text-brand-strong" />
                  <div className="min-w-0">
                    <dt className="text-muted">{item.label}</dt>
                    <dd className="mt-0.5 font-medium text-ink">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Tech key={s} name={s} />
              ))}
            </div>

            {links && (
              <div className="mt-8 flex flex-wrap gap-3">
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-brand-strong"
                  >
                    Open the live demo
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                {links.code && (
                  <a
                    href={links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium hover:border-ink/30"
                  >
                    <GitHubIcon size={16} />
                    Source code
                  </a>
                )}
                {links.site && (
                  <a
                    href={links.site}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium hover:border-ink/30"
                  >
                    <Globe size={16} aria-hidden />
                    {new URL(links.site).hostname}
                  </a>
                )}
              </div>
            )}
          </header>

          {project.cover && (
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <Screenshot shot={project.cover} />
            </div>
          )}

          <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:px-6">
            <Section title="The problem">
              <p>{project.problem}</p>
            </Section>
            <Section title="What I built">
              <Points items={project.built} />
            </Section>
            {project.approach && (
              <Section title="How I built it">
                <Points items={project.approach} />
              </Section>
            )}
            {project.bilingualDemo && (
              <Section title="Try it: one layout, two directions">
                <p className="mb-6">
                  Everything is laid out with start and end rather than left and right, so switching to Arabic mirrors the
                  whole interface without a separate design.
                </p>
                <div className="max-w-md">
                  <DirectionDemo />
                </div>
              </Section>
            )}
            {project.connected && (
              <Section title="How it connects">
                <p className="mb-6">
                  Brokwise, PolicyDesk and PaySandbox are three separate apps, each with its own repo and deployment. Together
                  they run one real customer journey.
                </p>
                <ProductFlow current={project.slug} />
              </Section>
            )}
            {project.result && (
              <Section title="Where it stands">
                <Points items={project.result} />
              </Section>
            )}
            {project.gallery && (
              <Section title="More screens">
                <div className="grid gap-8">
                  {project.gallery.map((shot) => (
                    <Screenshot key={shot.src} shot={shot} caption={shot.alt} />
                  ))}
                </div>
              </Section>
            )}
          </div>
        </article>

        <nav aria-label="More" className="border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-2 md:px-6">
            <Link
              href={`/projects/${next.slug}`}
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-ink/25"
            >
              <ProjectIcon name={next.icon} />
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted">Next project</span>
                <span className="block truncate font-semibold">{next.title}</span>
              </span>
              <ArrowRight size={20} aria-hidden className="shrink-0 text-muted transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex min-w-0 items-center gap-4 rounded-2xl bg-night p-5 text-white transition-colors hover:bg-ink"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-white/60">Want something like this?</span>
                <span className="block font-semibold">Message me on WhatsApp</span>
              </span>
              <ArrowUpRight size={20} aria-hidden className="shrink-0 text-white/60" />
            </a>
          </div>
        </nav>
      </main>
    </>
  );
}
