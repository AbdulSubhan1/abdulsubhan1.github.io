"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** The email address as text you can read, with one click to copy it. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="group inline-flex max-w-full items-center gap-3 rounded-xl border border-white/15 px-4 py-3 text-start transition-colors hover:border-white/40"
    >
      <span className="min-w-0 truncate text-lg font-medium text-white sm:text-xl">{email}</span>
      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-white/60 group-hover:text-white" aria-live="polite">
        {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
