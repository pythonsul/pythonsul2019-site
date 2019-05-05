const webpack = require('webpack');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devtool = 'source-map';
const autoprefixer = require('autoprefixer');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const resolve = config.resolve;
const rules = config.module.rules;
rules.find(
  rule => String(rule.test) === String(/\.scss$/)
).loader = ExtractTextPlugin.extract([
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, 'node_modules')]
    }
  }
]);

module.exports = {
  entry: config.entry,
  output: config.output,
  resolve: resolve,
  devtool: devtool,
  module: {
    rules: rules
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: config.plugins.concat([
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CnameWebpackPlugin({
      domain: 'pythonsul.org',
    }),
  ])
}
