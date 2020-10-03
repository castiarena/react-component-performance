import React from 'react';
import { StaticRouterContext } from 'react-router';
import SSR from '.';
import * as mockStats from './__mocks__/statFile.json';

jest.mock(
    require('path').resolve('./dist/public/loadable-stats.json'),
    () => mockStats,
    { virtual: true },
);

describe('Server side rendering test suite', () => {
    it('should return the html for a component', () => {
        const MockComponent: React.FC = ({ mock }: any) => <div data-mock={mock} />;
        const ssr = new SSR(MockComponent, { title: 'mock title', name: 'mock', lang: 'pt' });
        expect(ssr.render({ mock: true } as StaticRouterContext)).toMatchSnapshot();
    });
});
