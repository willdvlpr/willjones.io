module.exports = {
  presets: [
    "next/babel",
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/transform-runtime",
    ["styled-components", { ssr: true }],
  ],
};
