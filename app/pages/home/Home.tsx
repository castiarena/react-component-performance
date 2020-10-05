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
            Frontend Developer Test
        </Title>
        <Layout columns={2} gap={12} responsive fitted>
            <Box fitted>
                <SubTitle bold>
                    Test explanation
                </SubTitle>
                <Phar>
                    The first requirement was create a SPA with 3 pages, I took the
                    decision to do it as an hybrid application in order to manage the first
                    render of each one of these pages solving on that way the second point also.
                </Phar>
                <Phar>
                    This is the first page, on the header are the 3 links for each page,
                    all handled as SPA and the first render resolved by express application
                    with SSR from react side.
                </Phar>
                <Phar>
                    The second page got the representation of the data selected, this data
                    is came from the following API
                    {' '}
                    <Link href="https://www.instantwebtools.net/fake-rest-api">fake-rest-api</Link>
                    {'. '}
                    I took the decision to use this option because there is an example where the API
                    supports sizing, so on the example I add a infinite scroll
                    playing with that size.
                </Phar>
                <Phar>
                    Finally on the third page you would find the performance of the component
                    who deal with this infinite scroll and the timings of response of the API.
                    All the values are in milliseconds. And for environments reasons in order
                    to see that information you should download the repository and run it locally.
                    More details onç
                    {' '}
                    <LinkRoute to="/performance">performance page.</LinkRoute>
                </Phar>
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
