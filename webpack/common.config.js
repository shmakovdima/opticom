const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    publicPath: './dist/',
    filename: '[name].bundle.js',
  },

  module: {

  },

  plugins: [


    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "...", "stats.json"),
          JSON.stringify(stats.toJson()));
      });
    },

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
