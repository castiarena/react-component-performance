import express, { Application } from 'express';
import morgan from 'morgan';
import Server from '../Server';
import webpackDevConfig from '../../../webpack.config';

const dependencies = () => ({
    // eslint-disable-next-line global-require
    webpack: require('webpack'),
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    webpackDevMiddleware: require('webpack-dev-middleware'),
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
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
    const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: clientConfig.output.publicPath,
    });
    app.use(devMiddleware).use(webpackHotMiddleware(compiler));

    return app;
};

const app = configureDevServer(express());
const server = new Server(app);

server.use(morgan('common'));

// eslint-disable-next-line import/prefer-default-export
export { server };
