import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components';

import App from './App';

describe('App component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
