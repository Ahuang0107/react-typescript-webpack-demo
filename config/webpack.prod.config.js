const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = () => {
  const rootFolder = process.cwd();
  return {
    mode: 'production',
    output: {
      path: path.join(rootFolder, 'dist'),
      filename: 'js/[name].[contenthash:8].js',
      clean: true,
    },
    devtool: 'cheap-module-source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'],
          },
        },
      })],
    },
  };
};
