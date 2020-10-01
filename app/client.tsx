import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const wrapper = document.getElementById('app-wrapper');
const renderMethod = module.hot ? hydrate : render;

renderMethod(<App />, wrapper);

if (module.hot) {
  module.hot.accept();
  module.hot.addStatusHandler((status) => {
    // eslint-disable-next-line no-console
    if (status === 'prepare') console.clear();
  });
}
