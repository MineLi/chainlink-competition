const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
