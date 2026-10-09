"use client";

import { useState } from "react";

/**
 * Copies text to the clipboard and briefly confirms. Used in the gallery and
 * on generated prompt results. Falls back silently if the clipboard API is
 * unavailable (e.g. insecure context).
 */
export default function CopyButton({
  value,
  label = "Copy prompt",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — leave the label unchanged.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-raised px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {copied ? (
          <path d="M20 6L9 17l-5-5" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h9" />
          </>
        )}
      </svg>
      {copied ? "Copied" : label}
    </button>
  );
}
