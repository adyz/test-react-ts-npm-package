var path = require('path');
var env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
var generatedEntries = require('./temp/webpackEntryFile');


module.exports = {
  entry: generatedEntries,
  mode: env,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd', //Universal Module Definition
  },
  optimization: {
    minimize: true
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  },
  externals: {
      "react": "react",
      "react-dom": "react-dom"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};