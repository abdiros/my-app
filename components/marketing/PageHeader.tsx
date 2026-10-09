import Container from "@/components/ui/Container";

/** Shared masthead for inner marketing pages. */
export default function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
