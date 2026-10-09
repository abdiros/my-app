import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/marketing/PageHeader";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${SITE_NAME}.`,
};

const LAST_UPDATED = "9 October 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        intro="Plain terms for using the generator. Nothing here should surprise you."
      />
      <Container className="py-14">
        <p className="mb-10 text-sm text-muted">Last updated {LAST_UPDATED}.</p>
        <div className="max-w-3xl space-y-10 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-foreground [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-muted [&_li]:mt-2 [&_li]:text-sm [&_li]:leading-7 [&_li]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <h2>Using the service</h2>
            <p>
              You may use {SITE_NAME} to generate prompts from images you have
              the right to upload. You are responsible for the images you
              submit and for how you use the prompts that come back.
            </p>
          </section>
          <section>
            <h2>Your content</h2>
            <p>
              You keep ownership of the images you upload and the prompts you
              generate. You grant us only the permission needed to process an
              image and return its prompt.
            </p>
          </section>
          <section>
            <h2>Acceptable use</h2>
            <ul>
              <li>Do not upload content you do not have the right to share.</li>
              <li>
                Do not use the service to create prompts for illegal content.
              </li>
              <li>
                Do not attempt to disrupt, overload or reverse-engineer the
                service.
              </li>
            </ul>
          </section>
          <section>
            <h2>Plans and billing</h2>
            <p>
              Paid plans renew automatically until cancelled. Upgrades apply
              immediately; downgrades take effect at the end of the current
              billing period. Fees already paid are non-refundable except where
              required by law.
            </p>
          </section>
          <section>
            <h2>Availability</h2>
            <p>
              The service is provided as-is. We work to keep it available but do
              not guarantee uninterrupted access, and features may change.
            </p>
          </section>
          <section>
            <h2>Ending your use</h2>
            <p>
              You may stop using the service or close your account at any time.
              We may suspend accounts that break these terms.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
