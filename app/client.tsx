import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import hotModuleReplacement from './infrastructure/Development/hotModuleReplacement';

const wrapper = document.getElementById('app-wrapper');
const renderMethod = module.hot ? hydrate : render;

renderMethod(<App />, wrapper);

hotModuleReplacement(module);
