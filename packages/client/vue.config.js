module.exports = {
  transpileDependencies: ['vuetify'],

  chainWebpack: (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config.plugin('VuetifyLoaderPlugin').tap((args) => [
      {
        progressiveImages: true,
        sharp: true,
      },
    ]);
  },

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
  },
};
