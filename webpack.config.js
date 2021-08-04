const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, './src/entry.js'),

    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'e-learning.bundle.js',
    },

    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, './'),
        }
    },     

    module: {
        rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        }]
      }, 

    plugins: [
        new VueLoaderPlugin()
    ]      
  };