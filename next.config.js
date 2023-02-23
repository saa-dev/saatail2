const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  env: {
    AUTOCOMPLETE_PATH: path.join(__dirname, "src/components"),
  },
};
