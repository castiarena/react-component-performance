import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Home from './pages/home/Home';

const MainWrapper = styled.div`
    font-family: 'Manrope', sans-serif;
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
`;

const App: React.FC = () => (
    <MainWrapper>
        <GlobalStyles />
        <Home />
    </MainWrapper>
);

export default App;
