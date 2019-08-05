import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import compression from 'compression';

import config from '../config/webpack.config';

const app = express();
// 在 express 服务器上开启 gzip 压缩
app.use(compression());
// 让 express 使用 webpack-dev-middleware, 并把 webpack.config.js 作为基础配置
app.use(webpackDevMiddleware(webpack(config), {
  publicPath: config.output.publicPath,
}));

// 启动 express 服务器
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server now listening at: http://%s:%s', host, port);
});
