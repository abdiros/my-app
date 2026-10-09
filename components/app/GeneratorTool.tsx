"use client";

import { useEffect, useState } from "react";
import DropZone from "@/components/DropZone";
import Card from "@/components/ui/Card";
import PromptResult from "@/components/app/PromptResult";
import { STYLE_PRESETS } from "@/lib/generator";

type Status = "idle" | "loading" | "error" | "done";

export default function GeneratorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [styleId, setStyleId] = useState(STYLE_PRESETS[0].id);
  const [status, setStatus] = useState<Status>("idle");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Revoke the object URL whenever it changes or the tool unmounts.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function handleFileSelect(selected: File) {
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setStatus("idle");
    setPrompt("");
    setError(null);
  }

  async function generate() {
    if (!file) return;
    const style = STYLE_PRESETS.find((s) => s.id === styleId) ?? STYLE_PRESETS[0];

    setStatus("loading");
    setError(null);

    try {
      const form = new FormData();
      form.append("image", file);
      if (style.directive) form.append("style", style.directive);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: form,
      });
      const data = (await response.json()) as {
        prompt?: string;
        error?: string;
      };

      if (!response.ok || !data.prompt) {
        throw new Error(data.error ?? "The generator could not read that image.");
      }

      setPrompt(data.prompt);
      setStatus("done");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the prompt."
      );
      setStatus("error");
    }
  }

  function reset() {
    setFile(null);
    setPreviewUrl(null);
    setStatus("idle");
    setPrompt("");
    setError(null);
  }

  const busy = status === "loading";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
      {/* Left: input */}
      <Card className="p-6">
        {!file ? (
          <DropZone onFileSelect={handleFileSelect} />
        ) : (
          <div>
            <div className="relative overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewUrl ?? ""}
                alt={`Preview of ${file.name}`}
                className="max-h-80 w-full object-contain bg-background"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="truncate text-sm text-muted">{file.name}</p>
              <button
                type="button"
                onClick={reset}
                className="shrink-0 text-sm text-muted transition-colors hover:text-foreground"
              >
                Choose another
              </button>
            </div>
          </div>
        )}

        <fieldset className="mt-6">
          <legend className="mb-2 block text-sm font-medium text-foreground">
            Style direction
          </legend>
          <div className="flex flex-wrap gap-2">
            {STYLE_PRESETS.map((preset) => {
              const active = preset.id === styleId;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setStyleId(preset.id)}
                  aria-pressed={active}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    active
                      ? "border-brand bg-brand/10 text-foreground"
                      : "border-border text-muted hover:border-muted hover:text-foreground"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={generate}
          disabled={!file || busy}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-6 text-sm font-medium text-brand-foreground transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy && (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 animate-spin"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.25"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
          {busy ? "Writing your prompt…" : "Generate prompt"}
        </button>

        {status === "error" && error && (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            <p>{error}</p>
            {file && (
              <button
                type="button"
                onClick={generate}
                className="mt-2 font-medium text-red-200 underline"
              >
                Try again
              </button>
            )}
          </div>
        )}
      </Card>

      {/* Right: result */}
      <div className="lg:sticky lg:top-24">
        {status === "done" && prompt ? (
          <PromptResult
            prompt={prompt}
            styleLabel={
              STYLE_PRESETS.find((s) => s.id === styleId)?.label ?? "No preference"
            }
            onRegenerate={generate}
          />
        ) : status === "loading" ? (
          <Card className="p-6">
            <div className="h-4 w-32 animate-pulse rounded bg-raised" />
            <div className="mt-5 space-y-3">
              {[100, 92, 96, 70, 88, 60].map((w, i) => (
                <div
                  key={i}
                  className="h-3 animate-pulse rounded bg-raised"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </Card>
        ) : (
          <Card className="flex flex-col items-center justify-center p-10 text-center">
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
                <path d="M4 6h16M4 12h10M4 18h7" />
              </svg>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">
              Your prompt will appear here
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Upload an image and we&apos;ll describe it in the detail a
              generation tool needs.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
