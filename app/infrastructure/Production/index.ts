import express, { Application } from 'express';
import morgan from 'morgan';

const server: Application = express();

server.use(morgan('common'));

// eslint-disable-next-line import/prefer-default-export
export { server };
