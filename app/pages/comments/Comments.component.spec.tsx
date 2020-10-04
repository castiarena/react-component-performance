import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Comments from './Comments';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Comments component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = renderWithTheme(
            <BrowserRouter>
                <Comments />
            </BrowserRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
