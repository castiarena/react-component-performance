import React, { useState, ChangeEvent } from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import { Phar, SubTitle, Title } from '../../components/Typography';
import Box from '../../components/Box';
import Link from '../../components/Link';
import passengerGateway, { Passenger } from './gateway/passenger.gateway';
import InputText from '../../components/InputText';
import TableTest from './components/TableTest';

const Test = () => {
    const [renderedPassengers, setRenderedPassenger] = useState([]);
    const [quantity, setQuantity] = useState(50);
    const [page, setPage] = useState(1);

    const handleOnFetchPassengers = async () => {
        const { passengers } = await passengerGateway(quantity, page);
        setRenderedPassenger(passengers);
        return new Promise<Passenger[]>((resolve) => resolve(passengers));
    };

    const handleLoadMoreItems = async () => {
        setQuantity(quantity + 100);
        return handleOnFetchPassengers();
    };

    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(target.value));
    };

    return (
        <Layout columns={1} gap={40}>
            <Title align="center" bold>
                Test data
            </Title>
            <Box>
                <SubTitle bold>
                    Fetching data from
                    {' '}
                    <Link href="https://www.instantwebtools.net/fake-rest-api">https://www.instantwebtools.net/fake-rest-api</Link>
                </SubTitle>
                <Box>
                    <Phar>
                        I choice
                        {' '}
                        <strong>instantwebtools</strong>
                        {' '}
                        because there is an example where the API supports pagination.
                        The example data loads passenger information about passengers of airlines.
                    </Phar>
                    <Box size="smaller">
                        <ButtonAnchor onClick={handleOnFetchPassengers}>
                            Fetch passengers
                        </ButtonAnchor>
                        <InputText defaultValue={quantity} onInput={handleOnChange} />
                    </Box>
                </Box>
            </Box>
            <Layout columns={1} gap={10}>
                <TableTest
                    items={renderedPassengers}
                    handleLoadMoreItems={handleLoadMoreItems}
                    toggleItemActive={() => alert()}
                />
            </Layout>
        </Layout>
    );
};

export default Test;
