import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import 'jest-styled-components';

import App from './App';

jest.mock('./components/LazyLoad', () => ({ importComponent }: { importComponent: () => void}) => {
    importComponent();
    return <div />;
});

describe('App component test suite', () => {
    it('should render the home ', () => {
        const { asFragment } = render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render the test page ', () => {
        const { asFragment } = render(
            <MemoryRouter initialEntries={['/test']}>
                <App />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render the performance page', () => {
        const { asFragment } = render(
            <MemoryRouter initialEntries={['/performance']}>
                <App />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
