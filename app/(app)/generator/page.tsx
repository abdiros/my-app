import type { Metadata } from "next";
import GeneratorTool from "@/components/app/GeneratorTool";

export const metadata: Metadata = {
  title: "Generator",
  description: "Upload an image and get a ready-to-paste art prompt.",
};

export default function GeneratorPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Generator
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          Upload a reference image, choose a direction, and generate the prompt
          that recreates it.
        </p>
      </div>
      <GeneratorTool />
    </div>
  );
}
