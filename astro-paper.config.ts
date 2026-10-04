import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lisasimons.github.io/",
    title: "Lisa Simons",
    description:
      "Lisa Simons | Senior Business Analyst at Brainmates | Sydney | Business Analysis, Product Management, Information Architecture",
    author: "Lisa Simons",
    profile: "https://www.linkedin.com/in/lisasimons/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Australia/Sydney",
    dir: "ltr",
    googleVerification: "qL_uQFBwn4sPdOiIlzW6aE1etDp-atxcCaLgbEqQm5Y",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/lisasimons/" },
    { name: "github",   url: "https://github.com/lisasimons" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
