const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("awesome-typescript-loader"),
      require.resolve("react-docgen-typescript-loader"),
    ],
  },
  {
    test: /\.scss$/,
    use: [
      "style-loader", "css-loader", "sass-loader"
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};