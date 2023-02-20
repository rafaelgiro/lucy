module.exports = {
  extends: ["next", "turbo", "prettier", "next/babel", "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
