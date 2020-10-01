import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    color: white;
    border: none;
    background-color: green;
    border-radius: 12px;
`;

const Home = () => (
    <div>
        <h1>Hello world</h1>
        <ButtonStyled>Button</ButtonStyled>
    </div>
);

export default Home;
