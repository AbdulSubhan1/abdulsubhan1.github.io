import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProjectIcon } from "@/components/project-icon";
import { ProjectLinks } from "@/components/project-links";
import { projectBySlug } from "@/lib/projects";

// Brokwise, PolicyDesk and PaySandbox are three separate apps that run one customer journey together
const NODES = [
  {
    slug: "brokwise",
    role: "Website",
    does: "Where the customer asks for a quote and pays",
    shot: { src: "/projects/brokwise/car.webp", alt: "Brokwise car insurance page with \"Get prices now\" and \"Call me back\"" },
  },
  {
    slug: "policydesk",
    role: "CRM",
    does: "Where the team works the lead, prices plans and books the policy",
    shot: { src: "/policydesk-dashboard.webp", alt: "PolicyDesk dashboard with the opportunity funnel, lead pipeline and renewals" },
  },
  {
    slug: "paysandbox",
    role: "Payment gateway",
    does: "Where the card is charged, in test mode",
    shot: { src: "/projects/paysandbox/checkout.webp", alt: "PaySandbox hosted checkout with the order, card form and test cards" },
  },
];

const STEPS = [
  "A visitor asks for car insurance on Brokwise. Brokwise sends a signed server-to-server request, and PolicyDesk creates the lead and assigns a coordinator.",
  "Brokwise shows plans and add-ons priced by PolicyDesk. The plan the visitor picks is saved in PolicyDesk as a quote.",
  "Pay asks PolicyDesk to open a PaySandbox checkout session, and the visitor pays on PaySandbox's hosted checkout with a test card.",
  "PaySandbox sends a signed webhook to PolicyDesk, which records the payment and assigns an advisor. Brokwise's thank-you page shows both.",
];

/**
 * The three connected projects and the journey that runs through them. `current` highlights one of them, and
 * `shots` adds a screenshot to each, for the home page where the reader hasn't seen them yet.
 */
export function ProductFlow({ current, shots }: { current?: string; shots?: boolean }) {
  return (
    <div className="min-w-0">
      <ol className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
        {NODES.map((node, i) => {
          const project = projectBySlug(node.slug)!;
          return (
            <li key={node.slug} className="contents">
              {i > 0 && (
                <span aria-hidden className="grid place-items-center text-muted">
                  <ArrowRight size={20} className="rotate-90 md:rotate-0" />
                </span>
              )}
              <div
                aria-current={node.slug === current ? "page" : undefined}
                className="flex min-w-0 flex-col gap-3 rounded-2xl border border-line bg-surface p-5 aria-[current=page]:border-brand aria-[current=page]:ring-1 aria-[current=page]:ring-brand"
              >
                {shots && (
                  <Image
                    src={node.shot.src}
                    alt={node.shot.alt}
                    width={2880}
                    height={1800}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top"
                  />
                )}
                <span className="flex items-center gap-3">
                  <ProjectIcon name={project.icon} />
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{node.role}</span>
                    <span className="block font-semibold text-ink">{project.title}</span>
                  </span>
                </span>
                <span className="text-sm leading-snug text-ink-soft">{node.does}</span>
                <span className="mt-auto pt-1">
                  <ProjectLinks project={project} caseStudy={node.slug !== current} />
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      <ol className="mt-8 grid gap-4">
        {STEPS.map((step, i) => (
          <li key={step} className="flex gap-4">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-semibold text-brand-strong tabular-nums">
              {i + 1}
            </span>
            <span className="min-w-0 text-ink-soft">{step}</span>
          </li>
        ))}
      </ol>

      <a
        href="https://brokwise.vercel.app/car"
        data-pulse-event="live_journey_opened"
        data-pulse-label="brokwise car"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-brand-strong"
      >
        Try the journey on Brokwise
        <ArrowUpRight size={16} aria-hidden />
      </a>
    </div>
  );
}
