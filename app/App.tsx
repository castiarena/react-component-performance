import React from 'react';
import {
    Switch, Route, Link,
} from 'react-router-dom';
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
            <Link to="/some">some</Link>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/some">
                        some
                    </Route>
                </Switch>
            </div>
        </MainWrapper>
    </ThemeProvider>
);

export default App;
