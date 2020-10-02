import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import hotModuleReplacement from './infrastructure/Development/hotModuleReplacement';

const wrapper = document.getElementById('app-wrapper');

hydrate(<App />, wrapper);
hotModuleReplacement(module);
