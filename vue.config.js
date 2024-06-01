const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/whiskyrwa',
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
      args[0].title = '';
      return args;
    })
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [require('tailwindcss'), require('autoprefixer')]
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/admin-api': {
        target : 'http://123.207.64.184:8100',
        changeOrigin : true
      },
    },
  }
})
