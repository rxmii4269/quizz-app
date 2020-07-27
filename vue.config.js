const path = require("path");
module.exports = {
  pwa: {
    name: "quizzer"
  },

  assetsDir: "./assets",
  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(__dirname, "node_modules/vue-material-design-icons")
      },
      extensions: [".vue"]
    }
  }
};
