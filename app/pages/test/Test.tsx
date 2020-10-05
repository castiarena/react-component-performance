import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import { Phar, Title } from '../../components/Typography';
import passengerGateway, { Passenger } from './gateway/passenger.gateway';
import TableTest from './components/TableTest';

const Test = () => {
    const [renderedPassengers, setRenderedPassenger] = useState([]);
    const [quantity, setQuantity] = useState(50);
    const [total, setTotal] = useState(0);

    const fetchPassengers = async () => {
        const { passengers, passengersCount } = await passengerGateway(quantity);
        setRenderedPassenger(passengers);
        setTotal(passengersCount);
        return new Promise<Passenger[]>((resolve) => resolve(passengers));
    };

    const handleClickFetchPassengers = async () => {
        await fetchPassengers();
        window.scrollTo({
            top: 260,
            behavior: 'smooth',
        });
    };

    const handleLoadMoreItems = async () => {
        if (quantity >= total) {
            return new Promise<Passenger[]>((resolve) => resolve(renderedPassengers));
        }
        setQuantity(quantity + 100);
        return fetchPassengers();
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
                <TableTest
                    items={renderedPassengers}
                    handleLoadMoreItems={handleLoadMoreItems}
                />
            </Layout>
        </Layout>
    );
};

export default Test;
