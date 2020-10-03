import React from 'react';
import { ThemeProvider } from 'styled-components';
import { hydrate } from 'react-dom';
import App from './App';
import theme from './theme';
import hotModuleReplacement from './infrastructure/Development/hotModuleReplacement';

const wrapper = document.getElementById('app-wrapper');

hydrate(
    <App />,
    wrapper,
);

hotModuleReplacement(module);
