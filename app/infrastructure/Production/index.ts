import express, { Application } from 'express';
import morgan from 'morgan';
import Server from '../Server';

const app: Application = express();
const server = new Server(app);

server.use(morgan('common'));

export default server;
