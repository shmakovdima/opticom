const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'bootstrap-loader',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    publicPath: '/dist/',
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
    }],
  },

  plugins: [

     new SpritesmithPlugin({
        src: {
            cwd: path.resolve('./images/sprites'),
            glob: '*.png'
        },
        target: {
            image: path.resolve('src/images/sprite.png'),
            css: path.resolve('src/stylus/sprite.styl')
        },
        apiOptions: {
            cssImageRef: "-sprite.png"
        }
      }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      __DEVELOPMENT__: true,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
  ],
};
