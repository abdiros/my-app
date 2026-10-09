"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import CopyButton from "@/components/marketing/CopyButton";
import { HISTORY_ITEMS, gradientFor, type HistoryItem } from "@/lib/mock";

const PALETTES: [string, string][] = [
  ["#0ea5e9", "#0f172a"],
  ["#8b5cf6", "#1e1b4b"],
  ["#f59e0b", "#78350f"],
  ["#22c55e", "#052e16"],
  ["#f472b6", "#4c1d95"],
  ["#64748b", "#0f172a"],
];

function paletteFor(index: number): [string, string] {
  return PALETTES[index % PALETTES.length];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function HistoryList({
  items = HISTORY_ITEMS,
}: {
  items?: HistoryItem[];
}) {
  const styles = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.style)))],
    [items]
  );
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? items : items.filter((i) => i.style === filter);

  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {styles.map((style) => {
          const active = style === filter;
          return (
            <button
              key={style}
              type="button"
              onClick={() => setFilter(style)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                active
                  ? "border-brand bg-brand/10 text-foreground"
                  : "border-border text-muted hover:border-muted hover:text-foreground"
              }`}
            >
              {style}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-xl border border-border bg-surface px-5 py-8 text-center text-sm text-muted">
          No generations with that style yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {visible.map((item) => {
            const originalIndex = items.indexOf(item);
            return (
              <li key={item.id}>
                <Card className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                  <div
                    className="h-16 w-16 shrink-0 rounded-lg"
                    style={{ background: gradientFor(paletteFor(originalIndex)) }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm leading-6 text-foreground/90">
                      {item.prompt}
                    </p>
                    <p className="mt-1.5 text-xs text-muted">
                      {item.style} · {formatDate(item.createdAt)}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <CopyButton value={item.prompt} label="Copy" />
                    <Link
                      href="/generator"
                      className="inline-flex items-center rounded-md border border-border bg-raised px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      Use in generator
                    </Link>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="flex flex-col items-center justify-center p-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-raised">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      </div>
      <p className="mt-4 text-base font-medium text-foreground">
        No prompts yet
      </p>
      <p className="mt-1 max-w-sm text-sm leading-6 text-muted">
        Your generated prompts will be saved here so you can copy or revisit
        them.
      </p>
      <Link
        href="/generator"
        className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-brand to-brand-2 px-5 text-sm font-medium text-brand-foreground transition-[filter] hover:brightness-110"
      >
        Generate your first prompt
      </Link>
    </Card>
  );
}
