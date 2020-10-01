import express, { Application } from 'express';
import Server from '../Server';

const app: Application = express();
const server = new Server(app);

export { server };
