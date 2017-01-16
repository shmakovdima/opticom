const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const development = require('./dev.config.js');
const production = require('./prod.config.js');

const importTree = require('stylus-import-tree')

require('babel-polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};


process.env.BABEL_ENV = TARGET;

const common = {
   watchOptions: {
    aggregateTimeout: 300,
    poll: 300
  },

  watch: true,
  entry: [
    PATHS.app,
  ],

  output: {
    path: PATHS.build,

  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss', '.styl', '.css'],
    modulesDirectories: ['node_modules', PATHS.app],
    alias: {
      jquery: __dirname+"/../node_modules/jquery/dist/jquery.js" //ссылка на jquery lib
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, '../src'),
        ],
      }
    ],
      loaders: [


      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },

      {
        test: /bootstrap-styl\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery',
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-otf',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
          ]
        }
      ,{
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
     {
        test: /node_modules\/dist\/bootstrap\/js\//,
        loader: 'imports?jQuery=jquery',
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus?paths[]=node_modules,paths[]=lib&include css&resolve url',
      }],
  },
  stylus: {
    define: {
      "import_tree": importTree
    },
    paths: ['node_modules/bootstrap-styl']
  },


  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(production, common);
}
