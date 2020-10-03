import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Home from './pages/home/Home';
import theme from './theme';

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
    <ThemeProvider theme={theme}>
        <MainWrapper>
            <GlobalStyles />
            <Router history={createMemoryHistory()}>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </MainWrapper>
    </ThemeProvider>
);

export default App;
