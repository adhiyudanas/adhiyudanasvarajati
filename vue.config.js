module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/adhiyudanasvarajati/'
    : '/',

    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "@/styles/main.scss";`,
          },
        },
    },
}