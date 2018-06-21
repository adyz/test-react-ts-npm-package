const path = require('path');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  entry: {
		index: "./src/index",
	},
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
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};