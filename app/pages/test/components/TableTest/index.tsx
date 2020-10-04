import React, { memo } from 'react';
import styled from 'styled-components';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Passenger } from '../../gateway/passenger.gateway';
import TableTestRow from './TableTestRow';

const TableWrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const TableTestRowMemoized = memo(TableTestRow, areEqual);

const createItemData = memoize((items, toggleItemActive) => ({
    items,
    toggleItemActive,
}));

interface TableTestProps {
    handleLoadMoreItems: () => Promise<Passenger[]>;
    items: any[];
    toggleItemActive: () => void;
}

const TableTest = ({ items, toggleItemActive, handleLoadMoreItems }: TableTestProps) => {
    const itemData = createItemData(items, toggleItemActive);

    const isItemLoaded = (index:number): boolean => !!items[index];

    return (
        <TableWrapper>
            <InfiniteLoader
                itemCount={500}
                isItemLoaded={isItemLoaded}
                loadMoreItems={handleLoadMoreItems}
            >
                {({ onItemsRendered, ref }) => (
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                height={height}
                                ref={ref}
                                onItemsRendered={onItemsRendered}
                                itemCount={items.length}
                                itemData={itemData}
                                itemSize={160}
                                width={width}
                            >
                                {TableTestRowMemoized}
                            </List>
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </TableWrapper>
    );
};

export default TableTest;
