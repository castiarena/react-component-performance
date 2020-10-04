import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Test from './Test';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Test component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = renderWithTheme(
            <BrowserRouter>
                <Test />
            </BrowserRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
