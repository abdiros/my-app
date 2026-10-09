import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/marketing/PageHeader";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles the images you upload and the prompts you generate.`,
};

const LAST_UPDATED = "9 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="The short version: the images you upload are used to produce your prompt and then discarded. We don't build a library of them."
      />
      <Container className="py-14">
        <p className="mb-10 text-sm text-muted">Last updated {LAST_UPDATED}.</p>
        <div className="max-w-3xl space-y-10 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-foreground [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-muted [&_li]:mt-2 [&_li]:text-sm [&_li]:leading-7 [&_li]:text-muted [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <h2>What we collect</h2>
            <p>
              When you use the generator we process the image you upload and the
              style option you select, solely to produce a prompt. If you create
              an account, we store your email address and your generation
              history so the History page works.
            </p>
          </section>
          <section>
            <h2>Images you upload</h2>
            <p>
              Uploaded images are sent to our analysis provider, used to
              generate the prompt, and discarded once the request completes. We
              do not retain a copy, and we do not use them to train models.
            </p>
          </section>
          <section>
            <h2>Prompts you generate</h2>
            <p>
              Prompts are yours. We keep them in your account history so you can
              revisit and rerun them. You can delete an entry at any time; if
              you delete your account, its history is removed with it.
            </p>
          </section>
          <section>
            <h2>Analytics and cookies</h2>
            <p>
              We use a single session cookie to keep you signed in. We do not
              run third-party advertising trackers.
            </p>
          </section>
          <section>
            <h2>Your choices</h2>
            <ul>
              <li>Request a copy of the data we hold about you.</li>
              <li>Ask us to correct or delete it.</li>
              <li>Close your account and have its history removed.</li>
            </ul>
            <p>
              Reach us from the contact page to exercise any of these.
            </p>
          </section>
          <section>
            <h2>Changes to this policy</h2>
            <p>
              If this policy changes in a way that affects you, we will note it
              here and update the date above.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
