module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pythonsul-2019/'
    : '/',
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
