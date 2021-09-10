/* config-overrides.js */
const {
  useBabelRc,
  addBabelPlugin,
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  // eslint-disable-next-line
} = require('customize-cra');

// eslint-disable-next-line
module.exports = override(
  (config) => ({
    ...config,
    output: {
      ...config.output,
      globalObject: 'this',
    },
  }),
  useBabelRc(),
  disableEsLint(),
  // eslint-disable-next-line
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  addDecoratorsLegacy(),
  addBabelPlugin(['@babel/plugin-transform-typescript', { allowNamespaces: true }])
);
