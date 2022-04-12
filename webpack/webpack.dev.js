const webpack = require('webpack');
const webpackMerge = require('webpack-merge').merge;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const sass = require('sass');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = options =>
  webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'eval-source-map', // https://reactjs.org/docs/cross-origin-errors.html
    mode: ENV,
    entry: ['./src/main/webapp/app/index'],
    output: {
      path: utils.root('target/classes/static/'),
      filename: 'app/[name].bundle.js',
      chunkFilename: 'app/[id].chunk.js',
    },
    optimization: {
      moduleIds: 'named',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { implementation: sass },
            },
          ],
        },
      ],
    },
    devServer: {
      stats: options.stats,
      disableHostCheck: true, // Allow any host
      hot: true,
      contentBase: './target/classes/static/',
      port: 9060,
      watchOptions: {
        ignore: [/node_modules/, utils.root('src/test')],
      },
      https: options.tls,
      historyApiFallback: true,
    },
    stats: process.env.JHI_DISABLE_WEBPACK_LOGS ? 'none' : options.stats,
    plugins: [
      process.env.JHI_DISABLE_WEBPACK_LOGS
        ? null
        : new SimpleProgressWebpackPlugin({
            format: options.stats === 'minimal' ? 'compact' : 'expanded',
          }),
      new BrowserSyncPlugin(
        {
          https: options.tls,
          host: 'localhost',
          port: 9000,
          proxy: {
            target: `http${options.tls ? 's' : ''}://localhost:9060`,
            proxyOptions: {
              changeOrigin: false,
            },
          },
          socket: {
            clients: {
              heartbeatTimeout: 60000,
            },
          },
        },
        {
          reload: false,
        }
      ),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin(
        { excludeWarnings: true }, // ignore notifications form warning
        {
          title: 'Info City',
          contentImage: path.join(__dirname, 'info-city.png'),
        }
      ),
    ].filter(Boolean),
  });
