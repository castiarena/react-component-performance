import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import LazyLoad from '.';
import customTheme from '../../theme';

describe('Lazy load test suite', () => {
    it('should render as front', () => {
        const { asFragment, rerender } = render(
            <ThemeProvider theme={customTheme}>
                <LazyLoad importComponent={() => () => <div />} />
            </ThemeProvider>,
        );

        rerender(
            <ThemeProvider theme={customTheme}>
                <LazyLoad importComponent={() => () => <div />} />
            </ThemeProvider>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
