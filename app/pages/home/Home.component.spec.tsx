import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Home from './Home';

describe('Home component test suite', () => {
    it('smoke test, snapshot only ', () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });
});
