import React from 'react';
import {
    Switch, Route, Link,
} from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
import Home from './pages/home/Home';
import Comments from './pages/comments/Comments';
import Performance from './pages/performance/Performance';

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
            <Link to="/">home</Link>
            <Link to="/comments">comments</Link>
            <Link to="/performance">performance</Link>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/comments">
                        <Comments />
                    </Route>
                    <Route path="/performance">
                        <Performance />
                    </Route>
                </Switch>
            </div>
        </MainWrapper>
    </ThemeProvider>
);

export default App;
