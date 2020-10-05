import React from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import LinkRoute from '../../components/LinkRoute';
import { Phar, SubTitle, Title } from '../../components/Typography';
import Link from '../../components/Link';
import Box from '../../components/Box';

const Home = () => (
    <Layout columns={1} gap={40}>
        <Title align="center" bold>
            Real world one
            <strong>Frontend Developer Test</strong>
        </Title>
        <Layout columns={2} gap={12} responsive fitted>
            <Box fitted>
                <SubTitle bold>
                    Project explanation
                </SubTitle>
                <SubTitle bold>
                    Fetching data from
                    {' '}
                    <Link href="https://www.instantwebtools.net/fake-rest-api">fake-rest-api</Link>
                </SubTitle>
                <Box fitted>
                    <Phar>
                        I choice
                        {' '}
                        <strong>instantwebtools</strong>
                        {' '}
                        because there is an example where the API supports pagination.
                        The example data loads passenger information about passengers of airlines.
                    </Phar>
                </Box>
            </Box>
            <Box shadow>
                <SubTitle bold>Tasks</SubTitle>
                <Phar>
                    Can see the full tasks on the PDF file:
                </Phar>
                <Phar>
                    <ButtonAnchor href="./assets/instructions.pdf" download>Download</ButtonAnchor>
                </Phar>
            </Box>
        </Layout>
    </Layout>
);

export default Home;
