import Card from "@/components/ui/Card";

const STEPS = [
  {
    title: "Upload an image",
    body: "Drop in a JPG, PNG or WebP up to 5MB. It can be finished art, a rough render, or a photo you want to restyle.",
  },
  {
    title: "Pick a direction",
    body: "Optionally choose a style preset. Leave it blank and the model leans on what the image already shows.",
  },
  {
    title: "Read and copy the prompt",
    body: "The generator writes a full prompt in seconds. Copy it, rerun it, or tweak a phrase and generate again.",
  },
];

export default function HowItWorksSteps() {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {STEPS.map((step, i) => (
        <li key={step.title}>
          <Card className="h-full p-6">
            <div className="flex items-baseline justify-between">
              <span
                className="font-mono text-3xl font-semibold text-gradient"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted">Step {i + 1}</span>
            </div>
            <h3 className="mt-5 text-base font-medium text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
