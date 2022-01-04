const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry : path.resolve(__dirname, "../src/main.tsx"), 
  mode : "development",
  module : {
    rules : [
      {
        test : /\.tsx?$/,
        loader : 'babel-loader',
        options : {
          presets : [
            "@babel/preset-env",
            "@babel/preset-typescript"
          ],
          plugins : [
            "@vue/babel-plugin-jsx"
          ],
        },
        
        exclude : /node_modules/
      },
      {
        test : /\.vue$/,
        loader : 'vue-loader'
      }
    ]
  },
  resolve : {
    extensions : [".tsx", ".ts", ".js", '.vue']
  },
  output : {
    filename : 'bundle.js',
    path : path.resolve(__dirname, "../build")
  },
  devServer : {
    static : {
      directory : path.resolve(__dirname, "../build"),
    },
    port : 3020
	},
  plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, '../template.html')
    }),
    new VueLoaderPlugin()
  ]

  
}