import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const link = "inline-flex items-center gap-1 font-medium text-brand-strong underline-offset-4 hover:underline";

/** Live demo, code and case study links for a project, so a reader sees at a glance what they can open. */
export function ProjectLinks({ project, caseStudy = true }: { project: Project; caseStudy?: boolean }) {
  const { links } = project;
  return (
    <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {links?.live && (
        <a href={links.live} target="_blank" rel="noreferrer" className={link}>
          Live demo
          <ArrowUpRight size={14} aria-hidden />
        </a>
      )}
      {links?.code && (
        <a href={links.code} target="_blank" rel="noreferrer" className={link}>
          Code
          <ArrowUpRight size={14} aria-hidden />
        </a>
      )}
      {links?.site && (
        <a href={links.site} target="_blank" rel="noreferrer" className={link}>
          {new URL(links.site).hostname}
          <ArrowUpRight size={14} aria-hidden />
        </a>
      )}
      {caseStudy && (
        <Link href={`/projects/${project.slug}`} className={link}>
          Case study
          <ArrowRight size={14} aria-hidden />
        </Link>
      )}
    </p>
  );
}
