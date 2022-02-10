module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/adhiyudanasvarajati/'
    : '/',

    chainWebpack: (config) => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'Adhi Yudana Svarajati';
              args[0].meta = {'theme-color': '#ed7b49'};
  
           return args;
      })
    },

    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "@/styles/main.scss";`,
          },
        },
    }
}