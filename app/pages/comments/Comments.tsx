import React from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';

const Comments = () => (
    <Layout columns={1} gap={40}>
        <div>
            <h1>Comments</h1>
            <p>
                <ButtonAnchor href="./assets/instructions.pdf" download>Download instructions</ButtonAnchor>
            </p>
        </div>
    </Layout>
);

export default Comments;
