import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectIcon } from "./project-icon";
import { Tech } from "./tech";

/** A project on the home page. The whole card opens the project's page. */
export function ProjectCard({ project, featured, wide }: { project: Project; featured?: boolean; wide?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] hover:border-ink/25 hover:shadow-[0_20px_40px_-24px_rgb(16_32_27/0.3)] ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]" : ""
      } ${wide ? "md:col-span-2 lg:col-span-3" : ""}`}
    >
      <div className="flex min-w-0 flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <ProjectIcon name={project.icon} />
          <ArrowUpRight
            size={20}
            aria-hidden
            className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
          />
        </div>
        <p className="mt-5 text-sm text-muted">
          {project.category}, {project.where}
        </p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, featured ? 6 : 4).map((s) => (
            <Tech key={s} name={s} />
          ))}
        </div>
      </div>
      {featured && project.cover && (
        <div className="min-w-0 border-t border-line bg-paper p-4 lg:border-t-0 lg:border-s lg:p-6">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            className="h-auto w-full rounded-lg border border-line shadow-sm"
          />
        </div>
      )}
    </Link>
  );
}
