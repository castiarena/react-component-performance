import { Router, IRouter } from 'express';
import Home from './Home';
import SSR from '../../infrastructure/SSR';

const home: IRouter = Router();

home.get('/', (req, res) => {
    const ssr = new SSR(Home);
    const homeHTML: string = ssr.render({
        title: 'React component performance',
        name: 'app',
        lang: 'en',
    });
    res.type('html').send(homeHTML);
});

export default home;
