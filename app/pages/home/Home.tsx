import React from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ButtonAnchor from '../../components/ButtonAnchor';
import LinkRoute from '../../components/LinkRoute';

const Home = () => (
    <Layout columns={1} gap={40}>
        <div>
            <h1>Real world one test exercise</h1>
            <LinkRoute to="/some">Other page</LinkRoute>
            <p>
                <ButtonAnchor href="./assets/instructions.pdf" download>Download instructions</ButtonAnchor>
            </p>
        </div>
    </Layout>
);

export default Home;
