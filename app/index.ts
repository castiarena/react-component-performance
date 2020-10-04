import dotEnv from 'dotenv';
import compression from 'compression';
import express from 'express';
import envDispatcher, { ExportServer } from './infrastructure/EnvDispatcher';
import home from './pages/home';
import comments from './pages/comments';
import performance from './pages/performance';

// load env variables
dotEnv.config();

// create server instance for environment
const { NODE_ENV } = process.env;
const { server }: ExportServer = envDispatcher(NODE_ENV);

const runningServer = server
    .use(compression())
    .use(express.static('dist'))
    .use(home)
    .use(comments)
    .use(performance)
    .listen(process.env.PORT, () => {
        // eslint-disable-next-line no-console
        console.log('\x1b[36m%s\x1b[0m', `App running at on ${process.env.PORT}`);
    });

export default runningServer;
