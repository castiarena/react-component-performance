import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(<App />, document.getElementById('app-wrapper'));

//@ts-ignore
if (module.hot) {
  //@ts-ignore
  module.hot.accept();
  //@ts-ignore
  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') console.clear();
  });
}
