import { FC } from 'react';
import styled, { css } from 'styled-components';
import media from './MediaQueries';

interface LayoutProps {
    columns: number;
    gap: number;
    responsive?: boolean;
    fitted?: boolean;
}

const Layout: FC<LayoutProps> = styled.div<LayoutProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  justify-items: ${({ fitted }) => (!fitted ? 'stretch' : 'center')} ;
  grid-column-gap: ${({ gap }) => gap}px;
  ${({ responsive }) => responsive && css`
    ${media.mobile} {
      grid-template-columns: 1fr;
    }
  `} 
  
`;

export default Layout;
