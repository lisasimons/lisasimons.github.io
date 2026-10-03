/**
 * Internal resolved configuration used throughout the codebase.
 *
 * Prefer editing `astro-paper.config.ts` instead of this file. This module exists to
 * apply defaults and expose a fully-resolved config shape (`ResolvedAstroPaperConfig`).
 */
import userConfig from "@/astro-paper.config";
import type { ResolvedAstroPaperConfig } from "./types/config";
import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

const DEFAULT_OG_IMAGE = "astropaper-og.jpg";

const config: ResolvedAstroPaperConfig = {
  site: {
    website: "https://lisasimons.github.io/",          
    author: "Lisa Simons",                              
    profile: "https://www.linkedin.com/in/lisasimons",  
    desc: "Lisa Simons – Senior Business Analyst in Sydney. Consultant at Brainmates.", 
    title: "Lisa Simons | Senior Business Analyst", 
    ogImage: DEFAULT_OG_IMAGE,
    dynamicOgImage: true,
    lang: "en",
    timezone: "Australia/Sydney",
    dir: "ltr",
    googleVerification:
      userConfig.site.googleVerification || PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin:15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
        showArchives: true,
    showBackButton: true,
    editPost: {
    enabled: false,                                   // see below
    text: "Edit page",
    url: "https://github.com/lisasimons/lisasimons.github.io/edit/main/",
  },
    search: "pagefind",
  },
  socials: "https://www.linkedin.com/in/lisasimons",
  shareLinks: u"https://www.linkedin.com/in/lisasimons",
};

export default config;
