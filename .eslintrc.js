module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-lucy`
  extends: ["lucy"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
