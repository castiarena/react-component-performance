import React from 'react';
import styled from 'styled-components';
import LinkRoute from '../LinkRoute';
import media from '../Layout/MediaQueries';

interface HeaderRoute {
    to: string;
    name: string;
}

interface HeaderProps {
    routes: HeaderRoute[]
}

const HeaderWrapper = styled.header<HeaderProps>`
  padding: ${({ theme }) => theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(${({ routes }) => routes.length + 1}, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing.small};
  justify-items: center;
  ${media.mobile} {
      grid-template-columns: 1fr;
  }
`;

const MenuLinkRoute = styled(LinkRoute)`
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.small};
`;

const Header: React.FC<HeaderProps> = ({ routes }) => (
    <HeaderWrapper routes={routes}>
        <img src="./assets/logo-realworldone.svg" alt="Example" />
        { routes.map(({ name, to }) => <MenuLinkRoute to={to} key={name}>{name}</MenuLinkRoute>)}
    </HeaderWrapper>
);

export default Header;
