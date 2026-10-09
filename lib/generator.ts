export type StylePreset = {
  id: string;
  label: string;
  /** Passed to /api/analyze as the `style` field; appended to the system prompt. */
  directive: string;
};

/**
 * Presets offered on the generator. `directive` is the phrase the model weighs
 * alongside the image — see app/api/analyze/route.ts.
 */
export const STYLE_PRESETS: StylePreset[] = [
  { id: "none", label: "No preference", directive: "" },
  {
    id: "painterly",
    label: "Painterly",
    directive: "painterly oil-painting rendering, visible brushwork",
  },
  {
    id: "cinematic",
    label: "Cinematic",
    directive: "cinematic film still, dramatic lighting, anamorphic",
  },
  {
    id: "watercolor",
    label: "Watercolor",
    directive: "loose watercolor washes with fine ink linework",
  },
  {
    id: "render",
    label: "3D render",
    directive: "clean 3D render, soft global illumination, physically based materials",
  },
  {
    id: "photographic",
    label: "Photographic",
    directive: "photorealistic photography, natural light, true-to-life detail",
  },
  {
    id: "poster",
    label: "Poster graphic",
    directive: "flat vector poster graphic, limited palette, bold shapes",
  },
];
