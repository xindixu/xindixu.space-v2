module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader'
        },
        {
          test: /\.html$/,
          exclude: /index.html/,
          use: [
            {
              loader: 'html-loader',
              options: {
                interpolate: true
              }
            }
          ]
        }
      ]
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};
