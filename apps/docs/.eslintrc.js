module.exports = {
  root: true,
  overrides: [
    {
      files: "*.mdx",
      // "parser": "eslint-mdx", // enable `eslint-mdx` manually if it does not work
      extends: "plugin:mdx/recommended",
    },
  ],
};
