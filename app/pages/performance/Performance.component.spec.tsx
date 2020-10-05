import React from 'react';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Performance from './Performance';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Performance component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { getByText } = renderWithTheme(
            <BrowserRouter>
                <Performance />
            </BrowserRouter>,
        );
        expect(getByText('Components performance measuring')).toBeDefined();
    });
});
