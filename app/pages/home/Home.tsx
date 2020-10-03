import React from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const Home = () => (
    <Layout columns={3} gap={40}>
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
        <div>
            <h1>Hello world</h1>
            <Button>Button</Button>
        </div>
    </Layout>
);

export default Home;
