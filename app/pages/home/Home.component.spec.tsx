import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Home component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = renderWithTheme(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
