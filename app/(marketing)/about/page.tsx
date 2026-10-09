import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/marketing/PageHeader";
import CtaBand from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built a tool that turns images into prompts instead of the other way around.",
};

const TEAM = [
  { name: "Ada Okonkwo", role: "Founding engineer" },
  { name: "Ravi Menon", role: "Design lead" },
  { name: "Clara Nyström", role: "Model & prompt research" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="We kept describing images badly"
        intro="The generator began as an internal habit: reverse-engineer the prompt behind an image we liked, so we could build on it instead of starting from nothing."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-8 text-muted">
            <p>
              Writing a good prompt is mostly a vocabulary problem. You can see
              exactly what you want — the light, the palette, the way the
              composition leads the eye — but translating that into the handful
              of words a model responds to is where the time goes.
            </p>
            <p>
              So we built the translation step. Give it an image and it names
              the things you noticed but would not have thought to type. The
              prompt it returns is a starting point, not a verdict: edit it,
              rerun it, keep the phrases that work.
            </p>
            <p>
              The tool is deliberately small. It reads an image, writes a
              prompt, and stays out of the way of what you make with it.
            </p>
          </div>

          <div>
            <SectionHeading title="Who's building it" />
            <ul className="mt-6 space-y-3">
              {TEAM.map((member) => (
                <li key={member.name}>
                  <Card className="flex items-center justify-between p-5">
                    <span className="text-base font-medium text-foreground">
                      {member.name}
                    </span>
                    <span className="text-sm text-muted">{member.role}</span>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <CtaBand title="Put it to work on your next reference." />
    </>
  );
}
