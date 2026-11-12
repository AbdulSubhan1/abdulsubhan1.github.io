import {
  siAnthropic,
  siDrizzle,
  siGithub,
  siGithubactions,
  siGooglemaps,
  siI18next,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siTailwindcss,
  siTypescript,
  siUpstash,
  siVercel,
  siWordpress,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import { BrandIcon } from "./brand-icon";

/** The main stack, shown as logos in the hero. */
export const STACK: SimpleIcon[] = [siNextdotjs, siReact, siTypescript, siTailwindcss, siNodedotjs, siNestjs, siPostgresql];

const LOGOS: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  "Next.js 15": siNextdotjs,
  React: siReact,
  "React Native": siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  PostgreSQL: siPostgresql,
  Drizzle: siDrizzle,
  Vercel: siVercel,
  "Vercel AI SDK": siVercel,
  "Upstash Redis": siUpstash,
  "Upstash QStash": siUpstash,
  "Headless WordPress": siWordpress,
  "Redux Toolkit": siRedux,
  "Google Maps": siGooglemaps,
  "GitHub API": siGithub,
  "GitHub Actions": siGithubactions,
  Zod: siZod,
  "next-intl": siI18next,
  "next-intl (RTL)": siI18next,
  "i18n (RTL)": siI18next,
  "Claude Code": siAnthropic,
  "Claude Code plugin": siAnthropic,
  "Claude Code plugins": siAnthropic,
};

/** A technology name with its logo when there is one. `dark` is for dark sections. */
export function Tech({ name, dark }: { name: string; dark?: boolean }) {
  const logo = LOGOS[name];
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
