import { Router, IRouter } from 'express';
import SSR from '../../infrastructure/SSR';
import App from '../../App';

const home: IRouter = Router();

home.get('/', (req, res) => {
    const ssr = new SSR(App, {
        title: 'React component performance',
        name: 'app',
        lang: 'en',
    });

    const homeHTML: string = ssr.render({}, req.url);
    res.type('html').send(homeHTML);
});

export default home;
