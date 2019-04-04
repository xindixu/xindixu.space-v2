// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

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
    },
    plugins: [
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 75
            }
          }
        ],
        overrideExtension: true,
        detailedLogs: false,
        strict: true
      })
      // new BundleAnalyzerPlugin()
    ]
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};
