import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/** Closing call to action, reused at the foot of marketing pages. */
export default function CtaBand({
  title = "Your next prompt is one image away.",
  body = "Open the generator, drop in a reference, and copy the result.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-12 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px rule-gradient"
          />
          <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/generator" size="lg">
              Open the generator
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
