const path = require("path");

module.exports = ({ config, mode }) => {
  // Add js, json and vue extension support
  config.resolve.extensions.push(".ts", ".js", ".vue", ".json");

  // Add alias for @ pointing to src
  config.resolve.alias["@"] = path.resolve("src");

  config.module.rules.push({
    test: /\.ts$/,
    loaders: ["ts-loader"],
    include: path.resolve(__dirname, "../src/")
  });

  // Add SCSS preprocessing
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src/")
  });

  return config;
};
