module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "~@/scss/style.scss";
          @import "~normalize.css/normalize.css";
        `
      }
    }
  }
}
