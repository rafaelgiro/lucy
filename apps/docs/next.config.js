const withTM = require("next-transpile-modules")(["@lucyds/ui", "@lucyds/svg"]);

module.exports = withTM({
  reactStrictMode: true,
});
