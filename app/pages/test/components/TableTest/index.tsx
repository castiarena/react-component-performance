import React, { memo } from 'react';
import styled from 'styled-components';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Passenger } from '../../gateway/passenger.gateway';
import TableTestRow from './TableTestRow';
import Layout from '../../../../components/Layout';
import { Phar } from '../../../../components/Typography';
import Box from '../../../../components/Box';
import media from '../../../../components/Layout/MediaQueries';

const TableWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 ${({ theme }) => theme.spacing.large};   
  ${media.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.smaller};   
  }
`;

const TableHeader = styled(Box)`
  margin: 0 0 ${({ theme }) => theme.spacing.large};
  &:after {
    content:'';
    display: block;
    background-image: linear-gradient(180deg,rgba(251,252,255,1) 0%, rgba(9,9,121,0) 85%, rgba(0,212,255,0) 100%);
    position: absolute;
    left: 0;
    top: 126px;
    width: 100%;
    height: 50px;
    z-index: 100;
  }
`;

const TableHeaderLayout = styled(Layout)`
  justify-items: center;
  align-items: center;
`;

const ListWrapper = styled.div`
  position: relative;
`;

const TableTestRowMemoized = memo(TableTestRow, areEqual);

const createItemData = memoize((items) => ({
    items,
}));

interface TableTestProps {
    handleLoadMoreItems: () => Promise<Passenger[]>;
    items: any[];
}

const TableTest = ({ items, handleLoadMoreItems }: TableTestProps) => {
    const itemData = createItemData(items);

    const isItemLoaded = (index: number): boolean => !!items[index];

    return (
        <TableWrapper>
            <TableHeader shadow selected>
                <TableHeaderLayout columns={4} gap={12}>
                    <Phar bold>Logo</Phar>
                    <Phar bold>Website</Phar>
                    <Phar bold>Trips</Phar>
                    <Phar bold>Name</Phar>
                </TableHeaderLayout>
            </TableHeader>
            <AutoSizer>
                {({ height, width }) => (
                    <InfiniteLoader
                        itemCount={500}
                        isItemLoaded={isItemLoaded}
                        loadMoreItems={handleLoadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <ListWrapper>
                                <List
                                    height={height - 230}
                                    ref={ref}
                                    onItemsRendered={onItemsRendered}
                                    itemCount={items.length}
                                    itemData={itemData}
                                    itemSize={145}
                                    width={width}
                                >
                                    {TableTestRowMemoized}
                                </List>
                            </ListWrapper>
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </TableWrapper>
    );
};

export default TableTest;
