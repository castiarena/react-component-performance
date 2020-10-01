import express, { Application } from 'express';
import Server from '../Server';
import webpackDevConfig from '../../../webpack.config';

const dependencies = () => ({
  webpack: require('webpack'),
  webpackDevMiddleware: require('webpack-dev-middleware'),
  webpackHotMiddleware: require('webpack-hot-middleware'),
});

const configureClientHotReload = () => {
  const [clientConfig] = webpackDevConfig as any[];
  Object.keys(clientConfig.entry).forEach((key) => {
    clientConfig.entry[key] = [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      ...clientConfig.entry[key],
    ];
  });
  return clientConfig;
};

const configureDevServer = (app: Application) => {
  const { webpack, webpackDevMiddleware, webpackHotMiddleware } = dependencies();
  const clientConfig = configureClientHotReload();
  const compiler = webpack(clientConfig);
  app
    .use(
      webpackDevMiddleware(compiler, {
        publicPath: clientConfig.output.publicPath,
      })
    )
    .use(webpackHotMiddleware(compiler));

  return app;
};

const app = configureDevServer(express());
const server = new Server(app);

export { server };
