import React from 'react';
import 'jest-styled-components';
import Button from '.';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('Button test suite', () => {
    it('should render a primary button as default', () => {
        const { asFragment } = renderWithTheme(
            <Button>default button</Button>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });

    it('should render a primary button as default', () => {
        const { asFragment } = renderWithTheme(
            <Button kind="secondary">secondary Button</Button>,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });
});
