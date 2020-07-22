// @ts-nocheck
const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Env = process.env.NODE_ENV;
const isDev = Env === 'development';

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
];

if (isDev) {
  plugins.push(new HtmlWebpackPlugin({
    title: 'Development',
    template: './public/index.html',
  }));
  plugins.push(new CleanWebpackPlugin());
}
/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    index: isDev ? './src/dev.tsx' : './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
  },
  devtool: isDev ? 'inline-source-map' : 'none',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

module.exports = config;
