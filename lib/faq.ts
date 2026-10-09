export type FaqEntry = { q: string; a: string };

/** FAQ content for the /faq accordion. */
export const FAQ_ENTRIES: FaqEntry[] = [
  {
    q: "What does the generator actually do?",
    a: "It reads the image you upload and writes a detailed prompt — subject, style, palette, mood, lighting and composition — that recreates a similar image in Midjourney, Stable Diffusion or DALL·E.",
  },
  {
    q: "Which image formats can I upload?",
    a: "JPG, PNG and WebP up to 5MB each. Larger files are rejected before they ever reach the model.",
  },
  {
    q: "Can I steer the result toward a style?",
    a: "Yes. Pick a preset before generating and it is passed as an additional directive, so the model weighs it alongside what it sees in the image.",
  },
  {
    q: "Where do my images go?",
    a: "They are sent to our analysis endpoint, used to produce the prompt, and discarded when the request finishes. We do not keep a copy.",
  },
  {
    q: "Is there a free tier?",
    a: "There is. The Free plan includes ten generations a month with no card required.",
  },
  {
    q: "Do I own the prompts I generate?",
    a: "You do. Prompts you generate are yours to use commercially, with no attribution required.",
  },
];
