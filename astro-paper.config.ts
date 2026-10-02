import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lisasimons.github.io/",
    title: "Lisa Simons",
    description:
      "Lisa Simons – Senior Business Analyst specialising in Product Thinking and Information Architecture",
    author: "Lisa Simons",
    profile: "https://www.linkedin.com/in/lisasimons/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Australia/Sydney",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "",
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/lisasimons/" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
