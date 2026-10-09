import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import HowItWorksSteps from "@/components/marketing/HowItWorksSteps";
import GalleryGrid from "@/components/marketing/GalleryGrid";
import CtaBand from "@/components/marketing/CtaBand";
import { GALLERY_ITEMS } from "@/lib/mock";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title="A prompt is only useful if it's specific"
            description="The generator describes what it actually sees, so the result is a prompt you can edit — not a vague label."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title="Three steps, one pass"
            description="No prompt-engineering course required."
          />
          <div className="mt-10">
            <HowItWorksSteps />
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Recent prompts from the community"
              description="Every prompt below was generated from an uploaded reference."
            />
            <Button href="/gallery" variant="secondary">
              Browse the gallery
            </Button>
          </div>
          <div className="mt-10">
            <GalleryGrid items={GALLERY_ITEMS.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
