import React from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import { Phar, Title } from '../../components/Typography';
import TableTest from './components/TableTest';
import usePassengers from './gateway/usePassengers';

const Test = () => {
    const { passengers, handleLoadMorePassengers, fetchPassengers } = usePassengers();

    const handleClickFetchPassengers = async () => {
        await fetchPassengers();
        window.scrollTo({
            top: 260,
            behavior: 'smooth',
        });
    };

    return (
        <Layout columns={1} gap={40}>
            <Title align="center" bold>
                Passengers fake data rendered
            </Title>
            <Layout columns={1} gap={10}>
                <Phar align="center">
                    <ButtonAnchor onClick={handleClickFetchPassengers}>
                        Fetch passengers
                    </ButtonAnchor>
                </Phar>
                <TableTest items={passengers} handleLoadMoreItems={handleLoadMorePassengers} />
            </Layout>
        </Layout>
    );
};

export default Test;
