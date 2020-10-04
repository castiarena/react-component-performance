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
        <Layout columns={2} gap={12}>
            <Box>
                <SubTitle bold>
                    Prerequisites
                </SubTitle>
                <Phar>
                    Choose any JSON dummy data online generator. This will be your data source
                    that will be used within your application (so called Test Data).
                </Phar>
                <Phar>
                    The Test Data size should be at least 500 records.
                    e.g.
                    <Link href="https://jsonplaceholder.typicode.com/comments" target="_blank">
                        https://jsonplaceholder.typicode.com/comments
                    </Link>
                </Phar>
            </Box>
            <Box shadow>
                <SubTitle bold>Tasks</SubTitle>
                Can see the full tasks on the PDF file:
                <Phar>
                    <ButtonAnchor href="./assets/instructions.pdf" download>Download</ButtonAnchor>
                </Phar>
            </Box>
        </Layout>
    </Layout>
);

export default Home;
