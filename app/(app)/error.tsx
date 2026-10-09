"use client";

import { useEffect } from "react";
import Card from "@/components/ui/Card";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App route error:", error);
  }, [error]);

  return (
    <Card className="flex flex-col items-center justify-center p-12 text-center">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted">
        This section didn&apos;t load. Trying again usually resolves it — if it
        keeps happening, let us know from the contact page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-brand to-brand-2 px-5 text-sm font-medium text-brand-foreground transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        Try again
      </button>
      {error.digest && (
        <p className="mt-4 font-mono text-xs text-muted">
          Reference: {error.digest}
        </p>
      )}
    </Card>
  );
}
