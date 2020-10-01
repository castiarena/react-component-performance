import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

describe('App component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});
