const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react'],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true,
    // proxy: {
    //   '/cloudlicenseservice/v1/*': {
    //     target: 'http://localhost:8081',
    //     changeOrigin: true,
    //   }
    // }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  // mode: 'production',
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      // 加载 js 和 jsx 文件
      {
        test: /\.(js|jsx)$/, use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      // 加载 css 文件
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      // 加载图片文件
      {test: /\.(png|svg|jpg|git)/, use: ['file-loader']},
      // 加载字体文件
      {test: /\.(woff|woff2|eot|ttf|otf)/, use: ['file-loader']},
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin({analyzerPort: 8080}),
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'test',
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
