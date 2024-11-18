// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome"],
  fontawesome: {
    icons: {
      solid: ["video"],
      brands: [
        "fa-square-instagram",
        "fa-square-facebook",
        "fa-youtube",
        "fa-linkedin",
        "fa-whatsapp",
      ],
    },
  },
  css: ["~/assets/css/input.css", "swiper/css", "swiper/css/pagination"],
});
