import React from 'react';
import 'jest-styled-components';
import InputText from '.';
import renderWithTheme from '../../testing-tools/renderWithTheme';

describe('InputText test suite', () => {
    it('should a default InputText', () => {
        const { asFragment } = renderWithTheme(
            <InputText defaultValue="something" type="text" />,
        );
        const fragment = asFragment();

        expect(fragment).toMatchSnapshot();
    });
});
