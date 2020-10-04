import { Router, IRouter } from 'express';
import SSR from '../../infrastructure/SSR';
import App from '../../App';

const comments: IRouter = Router();

comments.get('/comments', (req, res) => {
    const ssr = new SSR(App, {
        title: 'React component performance - comments',
        name: 'app',
        lang: 'en',
    });

    const commentHTML: string = ssr.render({}, req.url);
    res.type('html').send(commentHTML);
});

export default comments;
