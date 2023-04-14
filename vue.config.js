const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/mySitePortfolio/" : "/", // для git
  // publicPath: process.env.NODE_ENV === "production" ? "" : "/", // для regru
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "en",
      localeDir: "locales",
      legacy: false,
    },
  },
});
