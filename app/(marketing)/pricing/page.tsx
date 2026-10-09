import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import PricingTable from "@/components/marketing/PricingTable";
import PageHeader from "@/components/marketing/PageHeader";
import { PRICING_FAQ } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Free, Pro and Team plans for the image-to-prompt generator.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        intro="Start free, upgrade when the generator is earning its keep. Every plan includes the same generator; plans differ in volume and sharing."
      />

      <Container className="py-14">
        <PricingTable />
      </Container>

      <section className="border-t border-border bg-surface/40">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title="Billing questions"
            description="The short answers. Ask us anything else from the contact page."
          />
          <div className="mt-8">
            <FaqAccordion items={PRICING_FAQ} />
          </div>
        </Container>
      </section>
    </>
  );
}
