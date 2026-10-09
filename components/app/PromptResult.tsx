"use client";

import Card from "@/components/ui/Card";
import CopyButton from "@/components/marketing/CopyButton";

export default function PromptResult({
  prompt,
  styleLabel,
  onRegenerate,
}: {
  prompt: string;
  styleLabel: string;
  onRegenerate: () => void;
}) {
  return (
    <Card className="p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-medium text-foreground">
            Generated prompt
          </h2>
          <p className="mt-1 text-xs text-muted">
            {styleLabel} · {prompt.length} characters
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRegenerate}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-raised px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
              <path d="M21 12a9 9 0 1 1-2.6-6.4" />
              <path d="M21 4v5h-5" />
            </svg>
            Regenerate
          </button>
          <CopyButton value={prompt} label="Copy" />
        </div>
      </div>

      <p className="mt-5 whitespace-pre-wrap rounded-xl border border-border bg-background p-4 font-mono text-sm leading-7 text-foreground/90">
        {prompt}
      </p>
    </Card>
  );
}
