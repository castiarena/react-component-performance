import { Router, IRouter } from 'express';
import SSR from '../../infrastructure/SSR';
import App from '../../App';

const comments: IRouter = Router();

comments.get('/test', (req, res) => {
    const ssr = new SSR(App, {
        title: 'React component performance - Test',
        name: 'app',
        lang: 'en',
    });

    const commentHTML: string = ssr.render({}, req.url);
    res.type('html').send(commentHTML);
});

export default comments;
