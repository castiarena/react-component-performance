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

const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.smaller} ${theme.spacing.tiny}`};
`;

const PharRow = styled(Phar)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const BoxRow = styled(Box)`
  min-height: 100%;
  display: grid;
  transition: background-color .2s linear;
  &:hover {
    cursor:pointer;
    background-color: ${({ theme }) => theme.palette.common.gray};
  }
`;

interface TableTestRowProps {
    data: {
        items: Passenger[];
    };
    index: number;
    style: any;
}

const TableTestRow = ({ data, index, style } : TableTestRowProps) => {
    const { items } = data;
    const { name, trips, airline } = items[index];
    return (
        <Wrapper style={style}>
            <BoxRow shadow fitted>
                <RowLayout columns={4} gap={8}>
                    <AirlineLogo src={airline.logo} alt={airline.name} />
                    <PharRow bold align="center">
                        <Link href={`https://${airline.website}`} target="_blank">{airline.name}</Link>
                    </PharRow>
                    <PharRow bold align="center">{trips}</PharRow>
                    <PharRow bold align="center">{name}</PharRow>
                </RowLayout>
            </BoxRow>
        </Wrapper>
    );
};

export default TableTestRow;
