const path = require('path');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  entry: './src/index.ts',
  mode: env,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd', //Universal Module Definition
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
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
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};