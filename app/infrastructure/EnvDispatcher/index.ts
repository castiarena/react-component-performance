import { Application } from 'express';

export interface ExportServer {
    server: Application;
}

export default (env: string): ExportServer => {
    const envName = env.substring(0, 1).toUpperCase() + env.substring(1, env.length).toLowerCase();
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(`../${envName}`);
};
