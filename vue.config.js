module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/adhiyudanasvarajati/'
    : '/',

    chainWebpack: (config) => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'Adhi Yudana Svarajati';
              args[0].meta = {'theme-color': '#636366',
                'viewport': 'height=device-height,width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1'
              };
  
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