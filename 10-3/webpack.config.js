const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// This is where you change Webpack to form to your style
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:'./index.html'
    })
  ]
};