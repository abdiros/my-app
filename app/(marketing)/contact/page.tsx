import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/marketing/PageHeader";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the team about plans, partnerships or a problem.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Questions about a plan, a bug to report, or something you want the generator to do. We read everything."
      />
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 text-sm leading-7 text-muted">
            <div>
              <h2 className="text-base font-medium text-foreground">Email</h2>
              <p className="mt-1.5">hello@your-saas-name.example</p>
            </div>
            <div>
              <h2 className="text-base font-medium text-foreground">
                Response time
              </h2>
              <p className="mt-1.5">Within one business day.</p>
            </div>
            <div>
              <h2 className="text-base font-medium text-foreground">
                Support hours
              </h2>
              <p className="mt-1.5">Monday to Friday, 9:00–18:00 CET.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
