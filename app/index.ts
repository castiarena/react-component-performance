import dotEnv from 'dotenv';
import compression from 'compression';
import Server, { IServer } from './infrastructure/Server';
import home from './pages/home';

// load env variables
dotEnv.config();

// create server instance for environment
const { NODE_ENV } = process.env;
const server: IServer = Server.environmentDispatcher(NODE_ENV);

server
    .use(compression())
    .statics('dist')
    .route('/', home)
    .listen(process.env.PORT, (PORT: number) => {
        // eslint-disable-next-line no-console
        console.log('\x1b[36m%s\x1b[0m', `App running at on ${PORT}`);
    });
