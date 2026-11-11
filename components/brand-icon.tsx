import type { SimpleIcon } from "simple-icons";

/** A technology logo from Simple Icons, in its brand colour unless `mono`. */
export function BrandIcon({ icon, size = 16, mono }: { icon: SimpleIcon; size?: number; mono?: boolean }) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={mono ? "currentColor" : `#${icon.hex}`}
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}
