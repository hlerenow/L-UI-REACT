module.exports = {
  "stories": [
    "../src/stories/**/*.@(js|jsx|ts|tsx|mdx)",
    "../src/**/__stories__/**.mdx",
    "../src/**/__stories__/**.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ]
}