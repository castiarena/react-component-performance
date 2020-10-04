import { FC } from 'react';
import styled from 'styled-components';
import media from './MediaQueries';

interface LayoutProps {
    columns: number;
    gap: number;
}

const Layout: FC<LayoutProps> = styled.div<LayoutProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-column-gap: ${({ gap }) => gap}px;
  padding: ${({ gap }) => gap}px;
  ${media.mobile} {
      grid-template-columns: 1fr;
  }
`;

export default Layout;
