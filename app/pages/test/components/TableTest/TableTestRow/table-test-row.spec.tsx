import React from 'react';
import TableTestRow from '.';
import renderWithTheme from '../../../../../testing-tools/renderWithTheme';
import {Passenger} from '../../../gateway/passenger.gateway';

describe('', () => {
    it('', () => {
        const mockPassenger: Passenger = {
            _id: 'somemockid',
            name: 'John Wick',
            airline: {
                _id: 0,
                name: 'Reeves airline',
                logo: 'some',
                slogan: 'I\'m thinking I\'m back',
                // eslint-disable-next-line camelcase
                head_quaters: 'New york',
                website: 'https://mr-reeves.com/',
                established: 'no idea',
            },
            trips: Infinity,
        };
        const mockData: { items: Passenger[]} = {
            items: [
                mockPassenger,
            ],
        };
        const { asFragment } = renderWithTheme(
            <TableTestRow data={mockData} index={0} style={{}} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
