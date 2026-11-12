import { ArrowDown, ArrowRight, CircleCheck, CircleStop, CircleX } from "lucide-react";
import type { FlowStep } from "@/lib/projects";

const stepCard = "min-w-0 rounded-2xl border border-line bg-surface p-5";
const stopCard = "min-w-0 rounded-2xl border border-amber-300 bg-amber-50 p-4";

/** A numbered, top-to-bottom diagram. A step with `stop` shows where the run can end early; `outcomes` shows two endings. */
export function FlowDiagram({ steps, note }: { steps: FlowStep[]; note?: string }) {
  return (
    <div className="min-w-0">
      <ol className="grid gap-2">
        {steps.map((step, i) => (
          <li key={step.title} className="grid gap-2">
            {i > 0 && (
              <span aria-hidden className="grid place-items-center text-muted">
                <ArrowDown size={18} />
              </span>
            )}
            <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[minmax(0,1.4fr)_auto_minmax(0,1fr)] md:gap-3">
              <div className={`${stepCard} ${step.stop || step.outcomes ? "" : "md:col-span-3"}`}>
                <p className="flex items-center gap-3 font-semibold text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-sm text-brand-strong tabular-nums">
                    {i + 1}
                  </span>
                  {step.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{step.detail}</p>
              </div>

              {step.stop && (
                <>
                  <span className="flex items-center justify-center gap-1 text-sm text-muted">
                    <ArrowRight size={18} aria-hidden className="rotate-90 md:rotate-0" />
                    yes
                  </span>
                  <div className={stopCard}>
                    <p className="flex items-center gap-2 font-semibold text-amber-900">
                      <CircleStop size={18} aria-hidden />
                      {step.stop.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-amber-900/80">{step.stop.detail}</p>
                  </div>
                </>
              )}

              {step.outcomes && (
                <>
                  <span aria-hidden className="hidden text-muted md:block">
                    <ArrowRight size={18} />
                  </span>
                  <div className="grid min-w-0 gap-2">
                    <div className="min-w-0 rounded-2xl border border-brand/40 bg-brand-soft p-4">
                      <p className="flex items-center gap-2 font-semibold text-brand-strong">
                        <CircleCheck size={18} aria-hidden />
                        {step.outcomes[0].title}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">{step.outcomes[0].detail}</p>
                    </div>
                    <div className="min-w-0 rounded-2xl border border-rose-300 bg-rose-50 p-4">
                      <p className="flex items-center gap-2 font-semibold text-rose-900">
                        <CircleX size={18} aria-hidden />
                        {step.outcomes[1].title}
                      </p>
                      <p className="mt-1 text-sm text-rose-900/80">{step.outcomes[1].detail}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            {step.stop && <p className="text-center text-sm text-muted">no, carry on</p>}
          </li>
        ))}
      </ol>
      {note && <p className="mt-6 text-base text-ink-soft">{note}</p>}
    </div>
  );
}
