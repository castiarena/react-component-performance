import { Router, IRouter } from 'express';
import SSR from '../../infrastructure/SSR';
import App from '../../App';

const performance: IRouter = Router();

performance.get('/performance', (req, res) => {
    const ssr = new SSR(App, {
        title: 'React component performance - performance',
        name: 'app',
        lang: 'en',
    });

    const performanceHTML: string = ssr.render({}, req.url);
    res.type('html').send(performanceHTML);
});

export default performance;
