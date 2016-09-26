const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
//const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  devtool: 'source-map',

  entry: ['bootstrap-loader/extractStyles'],

  output: {
    publicPath: 'dist/',
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!postcss-loader!sass',
    }],
  },

  plugins: [

/*      new SpritesmithPlugin({
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
    }),*/

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
