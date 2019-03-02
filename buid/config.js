var path = require('path')

module.exports = {
  build: {
    env: {
        NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../my-dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../my-dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
//   dev: {
//     env: require('./dev.env'),
//     port: 8080,
//     autoOpenBrowser: true,
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     proxyTable: {},
//     cssSourceMap: false
//   }
}
