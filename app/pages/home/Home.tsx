import React from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ButtonAnchor from '../../components/ButtonAnchor';
import LinkRoute from '../../components/LinkRoute';

const Home = () => (
    <Layout columns={3} gap={40}>
        <div>
            <h1>Real world one test exercise</h1>
            <LinkRoute to="/some">Other page</LinkRoute>
            <ButtonAnchor href="./assets/instructions.pdf" download>Download instructions</ButtonAnchor>
        </div>
        <div>
            <h1>Hello world</h1>
            <Button>Button</Button>
        </div>
        <div>
            <h1>Hello world</h1>
            <Button>Button</Button>
        </div>
        <div>
            <h1>Hello world</h1>
            <Button>Button</Button>
        </div>
    </Layout>
);

export default Home;
