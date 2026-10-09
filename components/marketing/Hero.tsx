import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { SITE_TAGLINE } from "@/lib/site";

/**
 * The hero's one bold element is the "lens": an abstract image that dissolves
 * into the prompt it would produce, split along the brand-gradient seam. It is
 * built from CSS and inline SVG only — deterministic, no image asset.
 */
function PromptLens() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-brand-2/20 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
        <div className="grid grid-cols-2">
          {/* Left: the source image, rendered as abstract painterly shapes. */}
          <div className="relative min-h-[19rem] overflow-hidden">
            <svg
              viewBox="0 0 200 320"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lens-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1e293b" />
                  <stop offset="1" stopColor="#7c2d12" />
                </linearGradient>
                <linearGradient id="lens-sun" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fbbf24" />
                  <stop offset="1" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <rect width="200" height="320" fill="url(#lens-sky)" />
              <circle cx="128" cy="120" r="34" fill="url(#lens-sun)" />
              <path
                d="M0 230 Q60 190 120 224 T200 210 V320 H0 Z"
                fill="#0f172a"
              />
              <path
                d="M0 262 Q70 232 140 258 T200 250 V320 H0 Z"
                fill="#020617"
              />
              <path
                d="M96 268 q10 -26 18 0 q6 18 -9 26 q-15 -8 -9 -26z"
                fill="#f59e0b"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Right: the resulting prompt, monospace, with the seam on the edge. */}
          <div className="relative min-h-[19rem] bg-background p-6">
            <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand to-brand-2" />
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
              Prompt
            </p>
            <p className="font-mono text-[13px] leading-6 text-foreground/90">
              desert ranger at golden hour, bronze plate armor, wrapped scarf,
              coiled rope at the hip, dust motes in rim light, painted
              character-sheet style, ochre and umber palette, cinematic 35mm,
              highly detailed
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px rule-gradient"
      />
      <Container className="grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <Badge>Image → prompt, in one pass</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            See an image.
            <br />
            Get the prompt that makes it.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            {SITE_TAGLINE} Upload a reference, and we write out the subject,
            style, palette and lighting as a prompt you can paste straight into
            your tool.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/generator" size="lg">
              Open the generator
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            No account needed for your first ten prompts.
          </p>
        </div>

        <PromptLens />
      </Container>
    </section>
  );
}
