import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import customTheme from './theme';
import Home from './pages/home/Home';
import Comments from './pages/comments/Comments';
import Performance from './pages/performance/Performance';
import Header from './components/Header';

const MainWrapper = styled.div`
    font-family: 'Manrope', sans-serif;
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
      background-color: ${customTheme.palette.common.white};
    }
`;

const App: React.FC = () => (
    <ThemeProvider theme={customTheme}>
        <MainWrapper>
            <GlobalStyles />
            <Header routes={[{
                to: '/',
                name: 'Home',
            }, {
                to: '/comments',
                name: 'Comments',
            }, {
                to: '/performance',
                name: 'Performance',
            }]}
            />
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
