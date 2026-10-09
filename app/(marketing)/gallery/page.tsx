import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/marketing/PageHeader";
import GalleryGrid from "@/components/marketing/GalleryGrid";
import CtaBand from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A public showcase of prompts generated from uploaded reference images.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        intro="Prompts the community generated and chose to share. Copy any of them straight into your tool."
      />
      <Container className="py-14">
        <GalleryGrid />
      </Container>
      <CtaBand title="Add your own prompt to the wall." />
    </>
  );
}
