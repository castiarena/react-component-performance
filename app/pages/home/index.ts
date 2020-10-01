import { Router, IRouter } from 'express';
import Home from './Home';
import SSR from '../../infrastructure/SSR';

const home: IRouter = Router();

home.get('/', (req, res) => {
  const ssr = new SSR(Home);
  const home = ssr.render({
    title: 'React component performance',
    name: 'app',
  });
  res.type('html').send(home);
});

export default home;
