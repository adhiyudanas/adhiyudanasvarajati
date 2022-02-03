module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/adhiyudanasvarajati/'
    : '/',

    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/styles/main.scss";`,
          },
        },
    },
}