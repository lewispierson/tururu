module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  modules: [
    "@nuxtjs/style-resources",
    [
      '@nuxtjs/google-tag-manager', { 
        id: 'GTM-5S3BCJW', 
        pageTracking: true 
    }],
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: ["assets/scss/main.scss"],
  },
  generate: {
    fallback: true,
  },
};
