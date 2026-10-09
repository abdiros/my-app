import Card from "@/components/ui/Card";

const FEATURES = [
  {
    title: "Reads the whole image",
    body: "Subject, style, palette, mood, lighting and composition are described together, not guessed one at a time.",
    icon: (
      <path d="M3 5a2 2 0 0 1 2-2h3l1.5 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
    ),
  },
  {
    title: "Steer it with presets",
    body: "Pass a style directive — photographic, watercolor, 3D render — and the model weighs it alongside what it sees.",
    icon: (
      <>
        <path d="M4 6h16M4 12h10M4 18h7" />
        <circle cx="18" cy="17" r="3" />
      </>
    ),
  },
  {
    title: "Copy in your format",
    body: "Output is written to paste directly into Midjourney, Stable Diffusion or DALL·E without cleanup.",
    icon: (
      <>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h9" />
      </>
    ),
  },
  {
    title: "History you can rerun",
    body: "Every prompt is kept. Re-run one against a new image or copy it again weeks later.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {FEATURES.map((feature) => (
        <Card key={feature.title} className="bg-raised/60 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-brand"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {feature.icon}
            </svg>
          </div>
          <h3 className="mt-4 text-base font-medium text-foreground">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
        </Card>
      ))}
    </div>
  );
}
