/**
 * Mock data for the gallery, history and dashboard surfaces.
 * No database is wired yet — these are placeholders that keep the pages
 * presentational so a real data layer can drop in later.
 */

export type GalleryItem = {
  id: string;
  niche: string;
  palette: [string, string];
  prompt: string;
  author: string;
};

export type HistoryItem = {
  id: string;
  prompt: string;
  createdAt: string; // ISO
  style: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    niche: "Character concept art",
    palette: ["#f59e0b", "#7c2d12"],
    prompt:
      "Armored desert ranger, weathered bronze plate over layered linen, wrapped scarf obscuring the lower face, three canteens and a coiled rope at the hip, golden-hour rim light, dust motes suspended in the air, painted character-sheet style, muted ochre and umber palette, cinematic 35mm framing, highly detailed, concept art key color",
    author: "Nadia Rahman",
  },
  {
    id: "g2",
    niche: "Product shot",
    palette: ["#e2e8f0", "#64748b"],
    prompt:
      "Matte ceramic pour-over coffee set on a pale concrete plinth, single softbox from the upper left, faint gradient shadow, seamless light-grey backdrop, minimal product photography, shallow depth of field, 85mm lens, cool neutral palette, catalog-ready, ultra sharp, e-commerce hero",
    author: "Tomas Berg",
  },
  {
    id: "g3",
    niche: "Environment matte",
    palette: ["#0ea5e9", "#0f172a"],
    prompt:
      "Floating monastery above a sea of low clouds at dawn, tiered pagoda roofs, waterfalls spilling into open air, flocks of crane silhouettes, teal and indigo palette with warm lantern accents, volumetric god rays, epic scale, matte painting, painterly brushwork, high dynamic range",
    author: "Ivy Chen",
  },
  {
    id: "g4",
    niche: "Portrait",
    palette: ["#f472b6", "#4c1d95"],
    prompt:
      "Close studio portrait of a dancer mid-turn, motion-blurred silk ribbon, single magenta gel against deep violet, hard key from the right, skin with natural texture, no retouching, editorial fashion lighting, 50mm, high contrast, film grain, vibrant duotone",
    author: "Marcus Webb",
  },
  {
    id: "g5",
    niche: "Isometric illustration",
    palette: ["#22c55e", "#134e4a"],
    prompt:
      "Isometric cutaway of a cozy treehouse workshop, spiral stairs, hanging plants, warm bulb lighting, tiny tools on pegboards, clean vector shapes, soft ambient occlusion, limited forest-green and cream palette, flat shading, playful editorial illustration",
    author: "Priya Nair",
  },
  {
    id: "g6",
    niche: "Sci-fi vehicle",
    palette: ["#f97316", "#1e293b"],
    prompt:
      "Brutalist cargo hauler with exposed pistons and welded plating, idling on a salt flat at dusk, orange navigation lights, exhaust haze, low camera angle, industrial sci-fi, weathered metal, rust streak detail, dramatic backlight, wide anamorphic",
    author: "Diego Alvarez",
  },
  {
    id: "g7",
    niche: "Still life",
    palette: ["#eab308", "#3f3f46"],
    prompt:
      "Overhead still life of ripe figs and cracked walnuts on dark slate, scattered flour, antique brass knife, chiaroscuro lighting from a single window, Dutch-master influence, rich shadows, warm umber palette, tactile texture, 100mm macro",
    author: "Hana Sato",
  },
  {
    id: "g8",
    niche: "Poster graphic",
    palette: ["#a855f7", "#0b1120"],
    prompt:
      "Retro-futurist concert poster, concentric halftone sun, bold condensed display type reading SKYWARD, deep indigo and neon violet, subtle paper grain, screen-print misregistration, geometric grid, high-contrast, collectible print",
    author: "Leo Fontaine",
  },
];

export const HISTORY_ITEMS: HistoryItem[] = [
  {
    id: "h1",
    prompt:
      "Weathered sailing ship emerging from morning fog, galleon rigging, warm lantern light, muted grey-green palette, painterly maritime oil style, dramatic composition",
    createdAt: "2026-10-08T14:32:00Z",
    style: "Painterly",
  },
  {
    id: "h2",
    prompt:
      "Neon-lit ramen stall at midnight, rain-slick pavement reflections, steam, vendor silhouette, cyberpunk Tokyo, magenta and cyan, 35mm, cinematic",
    createdAt: "2026-10-07T21:05:00Z",
    style: "Cinematic",
  },
  {
    id: "h3",
    prompt:
      "Botanical study of a monstera leaf, watercolor washes, loose ink linework, cream paper, scientific illustration, soft green palette",
    createdAt: "2026-10-06T09:48:00Z",
    style: "Watercolor",
  },
  {
    id: "h4",
    prompt:
      "Modular lunar habitat, regolith-printed domes, Earth rising on the horizon, crisp white and dust-grey, hard sunlight, architectural visualization",
    createdAt: "2026-10-04T17:20:00Z",
    style: "3D render",
  },
  {
    id: "h5",
    prompt:
      "Motion-blurred cyclist through a leafy avenue, golden hour, warm bokeh, editorial sports photography, shallow depth of field, 70-200mm",
    createdAt: "2026-10-03T08:11:00Z",
    style: "Photographic",
  },
  {
    id: "h6",
    prompt:
      "Art-deco travel poster, alpine lake and steeple, layered flat shapes, risk of red and steel blue, sunburst border, vintage print texture",
    createdAt: "2026-10-01T12:59:00Z",
    style: "Poster",
  },
];

export type DashboardStat = { label: string; value: string; delta?: string };
export type ActivityEntry = { id: string; action: string; when: string };

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: "Generations this month", value: "128", delta: "+12 this week" },
  { label: "Credits remaining", value: "872", delta: "Renews 1 Nov" },
  { label: "Current plan", value: "Pro", delta: "1 seat" },
];

export const RECENT_ACTIVITY: ActivityEntry[] = [
  { id: "a1", action: "Generated “painterly maritime” prompt", when: "2 hours ago" },
  { id: "a2", action: "Saved preset “Editorial portrait”", when: "Yesterday" },
  { id: "a3", action: "Copied prompt to Midjourney", when: "Yesterday" },
  { id: "a4", action: "Generated “lunar habitat” prompt", when: "3 days ago" },
  { id: "a5", action: "Joined the Pro plan", when: "Last week" },
];

/** Deterministic gradient string for a gallery/history thumbnail placeholder. */
export function gradientFor([from, to]: [string, string]): string {
  return `linear-gradient(135deg, ${from}, ${to})`;
}
