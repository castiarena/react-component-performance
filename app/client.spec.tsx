import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('Client test suite', () => {
    it('should mount the app on the document with HRM', () => {

        const main = document.createElement('main');
        main.id = 'app-wrapper';

        // render de application emulating SSR first render
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            {
                container: main,
            },
        );
        document.body.appendChild(main);

        // load the client side with hydration
        // eslint-disable-next-line global-require
        require('./client');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
});
