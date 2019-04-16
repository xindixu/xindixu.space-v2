const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
  pwa: {
    themeColor: '#E2B4BD',
    msTileColor: '#E2B4BD',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#E2B4BD',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-310x310.png'
    }
  },
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
            test: /\.(jpe?g|png)$/,
            options: {
              quality: 75
            }
          }
        ],
        overrideExtension: true,
        detailedLogs: true,
        strict: true
      }),
      new BundleAnalyzerPlugin()
    ]
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};
