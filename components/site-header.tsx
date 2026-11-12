import { Download } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/data";

const NAV = [
  { href: "/#projects", label: "Projects" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

/** The bar at the top of every page. Links point at the home page's sections, so they work from project pages too. */
export function SiteHeader() {
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
          <Link
            href="/"
            data-pulse-event="nav_clicked"
            data-pulse-label="Home (logo)"
            className="flex items-center gap-2.5 font-semibold"
            aria-label="Abdul Subhan, home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm font-bold text-paper">AS</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>
          <nav aria-label="Sections" className="hidden gap-7 text-sm text-ink-soft md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-pulse-event="nav_clicked"
                data-pulse-label={item.label}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={profile.cv}
              data-pulse-event="cv_opened"
              data-pulse-label="header"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-strong"
          >
            <Download size={16} aria-hidden />
            Download CV
          </a>
        </div>
      </header>
    </>
  );
}
