import React, { ReactElement } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface LayoutProps {
  title: string;
  name: string;
  children: ReactElement;
  styles: string;
}

const MainWrapper = styled.main`
  font-family: 'Manrope', sans-serif;
`;

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
`;

const Layout: React.FC<LayoutProps> = ({ children, title, name, styles }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;800&display=swap"
        rel="stylesheet"
      />
      {styles}
    </head>
    <body>
      <GlobalStyles />
      <MainWrapper id={`${name}-wrapper`}>{children}</MainWrapper>
      <script src={`/public/${name}.js`} />
      <script src={`/public/vendors~${name}.bundle.js`} />
    </body>
  </html>
);

export default Layout;
