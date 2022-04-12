const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const utils = require('./utils.js');

const getTsLoaderRule = env => {
  const rules = [
    {
      loader: 'thread-loader',
      options: {
        // There should be 1 cpu for the fork-ts-checker-webpack-plugin.
        // The value may need to be adjusted (e.g. to 1) in some CI environments,
        // as cpus() may report more cores than what are available to the build.
        workers: require('os').cpus().length - 1,
      },
    },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        happyPackMode: true,
      },
    },
  ];
  if (env === 'development') {
    rules.unshift({
      loader: 'react-hot-loader/webpack',
    });
  }
  return rules;
};

module.exports = options =>
  merge({
    cache: {
      // 1. Set cache type to filesystem
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '../target/webpack'),
      buildDependencies: {
        // 2. Add your config as buildDependency to get cache invalidation on config change
        config: [
          __filename,
          path.resolve(__dirname, `webpack.${options.env == 'development' ? 'dev' : 'prod'}.js`),
          path.resolve(__dirname, 'utils.js'),
          path.resolve(__dirname, '../postcss.config.js'),
          path.resolve(__dirname, '../tsconfig.json'),
        ],
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      modules: ['node_modules'],
      alias: utils.mapTypescriptAliasToWebpackAlias(),
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: getTsLoaderRule(options.env),
          include: [utils.root('./src/main/webapp/app')],
          exclude: [utils.root('node_modules')],
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
          loader: 'file-loader',
          options: {
            digest: 'hex',
            hash: 'sha512',
            name: 'content/[hash].[ext]',
          },
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'source-map-loader',
        },
      ],
    },
    stats: {
      children: false,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
        },
      }),
      new Dotenv({
        path: `./environments/.env.${options.env}`,
      }),
      new ESLintPlugin({
        extensions: ['js', 'ts', 'jsx', 'tsx'],
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: './src/main/webapp/content/', to: 'content/' },
          { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
          { from: './src/main/webapp/manifest.webapp', to: 'manifest.webapp' },
          { from: './src/main/webapp/robots.txt', to: 'robots.txt' },
          { from: './src/main/webapp/firebase-messaging-sw.js', to: 'firebase-messaging-sw.js' },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './src/main/webapp/index.html',
        chunksSortMode: 'auto',
        inject: 'body',
        base: '/',
      }),
      new MergeJsonWebpackPlugin({
        output: {
          groupBy: [
            { pattern: './src/main/webapp/i18n/vi/*.json', fileName: './i18n/vi.json' },
            { pattern: './src/main/webapp/i18n/en/*.json', fileName: './i18n/en.json' },
            { pattern: './src/main/webapp/i18n/ko/*.json', fileName: './i18n/ko.json' },
          ],
        },
      }),
    ],
  });
