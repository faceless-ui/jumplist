const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [{
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'build.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
}, {
  devtool: 'source-map',
  mode: 'production',
  entry: './demo/index.js',
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'demo/index.html',
    }),
  ],
}];
