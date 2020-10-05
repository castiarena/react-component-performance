import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import customTheme from './theme';
import Test from './pages/test/Test';
import Performance from './pages/performance/Performance';
import Header from './components/Header';
import media from './components/Layout/MediaQueries';
import LazyLoad from './components/LazyLoad';

const MainWrapper = styled.div`
    font-family: 'Manrope', sans-serif;
    max-width: 1280px;
    margin: 0 auto;
    ${media.desktop}{
        padding: ${({ theme }) => theme.spacing.medium};
    }
    ${media.mobile}{
        padding: ${({ theme }) => `${theme.spacing.tiny} ${theme.spacing.tiny} ${theme.spacing.large}`} ;
    }
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    html, body {
      background-color: #FBFCFF;
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
                to: '/test',
                name: 'Test',
            }, {
                to: '/performance',
                name: 'Performance',
            }]}
            />
            <div>
                <Switch>
                    <Route exact path="/">
                        <LazyLoad importComponent={() => import('./pages/home/Home')} />
                    </Route>
                    <Route path="/test">
                        <LazyLoad importComponent={() => import('./pages/test/Test')} />
                    </Route>
                    <Route path="/performance">
                        <LazyLoad importComponent={() => import('./pages/performance/Performance')} />
                    </Route>
                </Switch>
            </div>
        </MainWrapper>
    </ThemeProvider>
);

export default App;
