module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pythonsul2019-site/' : '/',
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
