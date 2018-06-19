const path = require('path');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  entry: './src/index.ts',
  mode: env,
  output: {
    filename: 'bundle.js', //This will be under the dist folder?
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};