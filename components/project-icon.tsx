import {
  Bot,
  Building2,
  Car,
  CreditCard,
  Globe,
  LayoutDashboard,
  Puzzle,
  ScanSearch,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import type { ProjectIcon as IconName } from "@/lib/projects";

const ICONS = {
  shield: ShieldCheck,
  cart: ShoppingCart,
  layout: LayoutDashboard,
  smartphone: Smartphone,
  search: Search,
  bot: Bot,
  building: Building2,
  globe: Globe,
  puzzle: Puzzle,
  card: CreditCard,
  scan: ScanSearch,
  car: Car,
} as const;

/** A project's icon in a soft teal tile. */
export function ProjectIcon({ name, size = "md" }: { name: IconName; size?: "md" | "lg" }) {
  const Icon = ICONS[name];
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-strong ${
        size === "lg" ? "h-14 w-14" : "h-11 w-11"
      }`}
    >
      <Icon size={size === "lg" ? 28 : 22} aria-hidden />
    </span>
  );
}
