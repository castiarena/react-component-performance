import React from 'react';
import 'jest-styled-components';
import Home from './Home';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Home component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = renderWithTheme(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});
