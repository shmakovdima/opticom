const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
//const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    publicPath: '/dist/',
  },

  module: {

  },

  plugins: [


    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        comments: false,
        sourceMap: false,
        compress: {
            drop_console: true
        },
        mangle: {
            except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
        }
    }),

  
  
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      __DEVELOPMENT__: true,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: "jquery",
    }),
  ],
};
