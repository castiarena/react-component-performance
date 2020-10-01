import express, { Application, IRouter } from 'express';
import { createServer, Server as HTTPServer } from 'http';

interface IEnvironmentServer {
  server: IServer;
}

interface IServer {
  route(path: string, route: IRouter): IServer;
  use(something: any): IServer;
  statics(path: string): IServer;
  listen(port: number | string, callback: (port: number) => void): IServer;
}

class Server implements IServer {
  private app: Application;
  private readonly httpServer: HTTPServer;

  private readonly DEFAULT_PORT = 5000;

  constructor(app: Application = express()) {
    this.app = app;
    this.httpServer = createServer(app);
  }

  public route(path: string, route: IRouter): IServer {
    this.app.use(path, route);
    return this;
  }

  public statics(path: string): IServer {
    this.app.use(express.static(path));
    return this;
  }

  public listen(port = this.DEFAULT_PORT, callback: (port: number) => void): IServer {
    this.httpServer.listen(port, () => callback(port));
    return this;
  }

  public use(something: any): IServer {
    this.app.use(something);
    return this;
  }

  public static environmentDispatcher(env: string): IEnvironmentServer {
    console.log(env);
    const envName = env.substring(0, 1).toUpperCase() + env.substring(1, env.length).toLowerCase();
    return require(`../${envName}`);
  }
}

export default Server;
export { IServer, IEnvironmentServer };
