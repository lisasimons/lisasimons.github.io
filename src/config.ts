/**
 * Internal resolved configuration used throughout the codebase.
 *
 * Prefer editing `astro-paper.config.ts` instead of this file. This module exists to
 * apply defaults and expose a fully-resolved config shape (`ResolvedAstroPaperConfig`).
 */
import userConfig from "@/astro-paper.config";
import type { ResolvedAstroPaperConfig } from "./types/config";
import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

const DEFAULT_OG_IMAGE = "default-og.jpg";

const config: ResolvedAstroPaperConfig = {
  site: {
    website: "https://lisasimons.github.io/",          // changed
    author: "Lisa Simons",                              // changed
    profile: "https://www.linkedin.com/in/lisasimons",  // changed
    desc: "Lisa Simons – Senior Business Analyst in Sydney. Consultant at Brainmates.", // changed
    title: "Lisa Simons | Senior Business Analyst", // changed
    ogImage: DEFAULT_OG_IMAGE,
    lang: "en",
    timezone: "Australia/Sydney",
    dir: "ltr",
    googleVerification:
      userConfig.site.googleVerification || PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin:15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
    enabled: false,                                   // see below
    text: "Edit page",
    url: "https://github.com/lisasimons/lisasimons.github.io/edit/main/",
  },
    search: userConfig.features?.search ?? "pagefind",
  },
  socials: "https://www.linkedin.com/in/lisasimons",
  shareLinks: userConfig.shareLinks ?? [],
};

export default config;
