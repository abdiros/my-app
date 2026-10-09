import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/marketing/PageHeader";
import HowItWorksSteps from "@/components/marketing/HowItWorksSteps";
import CtaBand from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Upload an image, optionally pick a style, and read the prompt that recreates it.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How it works"
        intro="The generator looks at your image once and writes a single detailed prompt. Here is what happens between the upload and the copy button."
      />

      <Container className="py-16 sm:py-20">
        <HowItWorksSteps />
      </Container>

      <section className="border-t border-border bg-surface/40">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title="What the prompt covers"
            description="The model is asked for one thing: everything a tool would need to recreate the image."
          />
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {[
              ["Subject", "What is in frame, including parts that read as secondary at a glance."],
              ["Style", "Painterly, photographic, vector, and the tradition it echoes."],
              ["Palette", "The dominant colors and how they sit against each other."],
              ["Lighting", "Direction, hardness and time of day, called out explicitly."],
              ["Composition", "Framing, angle and where the eye is led."],
              ["Quality", "The detail and fidelity tags each tool responds to."],
            ].map(([term, desc]) => (
              <div key={term} className="border-t border-border pt-5">
                <dt className="text-base font-medium text-foreground">
                  {term}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-muted">{desc}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="See it on your own image." />
    </>
  );
}
