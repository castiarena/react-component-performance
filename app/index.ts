import dotEnv from 'dotenv';
import compression from 'compression';
import Server, { IEnvironmentServer } from './infrastructure/Server';
import home from './pages/home';

// load env variables
dotEnv.config();

// create server instance for environment
const { NODE_ENV } = process.env;
const { server } = Server.environmentDispatcher(NODE_ENV);

server
  .use(compression())
  .statics('dist')
  .route('/', home)
  .listen(process.env.PORT, (PORT: number) => console.log(`Listening on ${PORT}`));
