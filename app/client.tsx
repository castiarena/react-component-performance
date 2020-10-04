import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './App';
import hotModuleReplacement from './infrastructure/Development/hotModuleReplacement';

const wrapper = document.getElementById('app-wrapper');

ReactDom.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    wrapper,
);

hotModuleReplacement(module);
