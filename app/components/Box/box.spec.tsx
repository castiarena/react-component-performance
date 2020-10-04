import React from 'react';
import 'jest-styled-components';
import Box from '.';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Box test suite', () => {
    it('should a default Box', () => {
        const { asFragment } = renderWithTheme(
            <Box>default box</Box>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });

    it('should a shadow Box', () => {
        const { asFragment } = renderWithTheme(
            <Box shadow>shadow box</Box>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });

    it('should a shadow transparent Box', () => {
        const { asFragment } = renderWithTheme(
            <Box shadow transparent>shadow transparent box</Box>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });

    it('should a shadow transparent Box', () => {
        const { asFragment } = renderWithTheme(
            <Box size="large">shadow transparent box</Box>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });
});
