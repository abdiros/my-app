import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/marketing/PageHeader";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import CtaBand from "@/components/marketing/CtaBand";
import { FAQ_ENTRIES } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about formats, privacy, styles and billing.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        intro="If something here doesn't cover it, the contact page reaches a person."
      />
      <Container className="py-14">
        <div className="max-w-3xl">
          <FaqAccordion items={FAQ_ENTRIES} />
        </div>
      </Container>
      <CtaBand title="Still curious? Try it." />
    </>
  );
}
