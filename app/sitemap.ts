import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Evaluated once at build time; `new Date()` during render is an unstable value
// under cacheComponents.
const LAST_MODIFIED = new Date();

/** Public, indexable routes. Auth and app surfaces are intentionally excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/pricing",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route === "" || route === "/gallery" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
