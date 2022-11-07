module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/adhiyudanasvarajati/'
    : '/',

    chainWebpack: (config) => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'Adhi Yudana Svarajati';
              args[0].meta = {
                'description': 'Hey! Thanks for visiting my profile page. Please gladly reach out to me and I can help your projects get done!',
                'robots' : 'nofollow',
                'author': 'Adhi Yudana Svarajati',
                'http-equiv' : 'refresh',
                'theme-color': '#636366',
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