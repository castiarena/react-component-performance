import React from 'react';
import styled from 'styled-components';
import { Passenger } from '../../../gateway/passenger.gateway';
import Box from '../../../../../components/Box';
import Img from '../../../../../components/Img';
import { Phar } from '../../../../../components/Typography';
import Link from '../../../../../components/Link';
import Layout from '../../../../../components/Layout';

const AirlineLogo = styled(Img)`
  width: auto;
  height: auto;
  max-width: 64px;
`;

const RowLayout = styled(Layout)`
  justify-items: center;
  align-items: center;
`;

const TableTestRow = ({ data, index, style }: any) => {
    const { items, toggleItemActive } = data;
    const { name, trips, airline } : Passenger = items[index];
    return (
        <Box style={style}>
            <Box shadow>
                <RowLayout columns={4} gap={8}>
                    <AirlineLogo src={airline.logo} alt={airline.name} />
                    <Link href={airline.website} target="_blank">{airline.name}</Link>
                    <Phar bold>{trips}</Phar>
                    <Phar bold>{name}</Phar>
                </RowLayout>
            </Box>
        </Box>
    );
};

export default TableTestRow;
