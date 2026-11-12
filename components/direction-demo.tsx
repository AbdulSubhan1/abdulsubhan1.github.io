"use client";

import { Check, Languages } from "lucide-react";
import { useState } from "react";

type Lang = "en" | "ar";

// One lead card from a bilingual insurance CRM, in both languages. The layout mirrors itself; nothing is
// positioned with left/right, only start/end.
const COPY = {
  en: {
    label: "Lead",
    name: "Ahmed Khan",
    product: "Comprehensive car cover",
    advisor: "Aisha Khan",
    comma: ", ",
    status: "KYC approved",
    steps: ["Quote", "KYC", "Documents", "Policy"],
    premium: "AED 1,590",
    period: "a year",
    action: "Book policy",
  },
  ar: {
    label: "عميل محتمل",
    name: "أحمد خان",
    product: "تأمين شامل للسيارة",
    advisor: "عائشة خان",
    comma: "، ",
    status: "تمت الموافقة على اعرف عميلك",
    steps: ["عرض السعر", "اعرف عميلك", "المستندات", "الوثيقة"],
    premium: "1,590 درهم",
    period: "سنويًا",
    action: "إصدار الوثيقة",
  },
} as const;

const DONE = 2;

/** The hero's interactive moment: flip a real-looking CRM card between English and Arabic. */
export function DirectionDemo() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <figure className="min-w-0">
      <div
        role="radiogroup"
        aria-label="Card language"
        className="mb-3 inline-flex rounded-full border border-line bg-surface p-1 text-sm shadow-sm shadow-ink/5"
      >
        {(["en", "ar"] as const).map((l) => (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={lang === l}
            onClick={() => setLang(l)}
            data-pulse-event="language_demo_switched"
            data-pulse-label={l === "en" ? "English" : "Arabic"}
            className="rounded-full px-4 py-1.5 font-medium text-ink-soft transition-colors hover:text-ink aria-checked:bg-ink aria-checked:text-paper"
          >
            {l === "en" ? "English" : <span className="font-arabic">العربية</span>}
          </button>
        ))}
      </div>

      <div
        key={lang}
        dir={dir}
        lang={lang}
        className={`rounded-2xl border border-line bg-surface p-5 shadow-[0_24px_48px_-24px_rgb(16_32_27/0.25)] sm:p-6 ${
          lang === "ar" ? "animate-enter-end" : "animate-enter-start"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-muted">{t.label}</p>
            <p className="mt-0.5 truncate text-xl font-semibold">{t.name}</p>
            <p className="text-sm text-ink-soft">
              {t.product}
              {t.comma}
              {t.advisor}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
            <Check size={13} aria-hidden />
            {t.status}
          </span>
        </div>

        <ol className="mt-6 grid grid-cols-4 gap-2">
          {t.steps.map((step, i) => (
            <li key={step} className="min-w-0">
              <span className={`block h-1.5 rounded-full ${i < DONE ? "bg-brand" : "bg-line"}`} />
              <span className={`mt-2 block truncate text-xs ${i < DONE ? "font-medium text-ink" : "text-muted"}`}>
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          <p className="min-w-0">
            <span className="block text-2xl font-semibold tabular-nums">{t.premium}</span>
            <span className="text-sm text-muted">{t.period}</span>
          </p>
          <span className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white">{t.action}</span>
        </div>
      </div>

      <figcaption className="mt-3 flex items-start gap-2 text-sm text-muted">
        <Languages size={16} className="mt-0.5 shrink-0" aria-hidden />
        Most of what I shipped ran in English and Arabic. Switch the language and the whole layout mirrors.
      </figcaption>
    </figure>
  );
}
