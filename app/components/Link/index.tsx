import styled, { css } from 'styled-components';

export interface LinkProps {
    underline?: boolean;
}

export const LinkStyles = css<LinkProps>`
  color: ${({ theme }) => theme.palette.primary.main};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.hover};
  }
`;

const Link = styled.a<LinkProps>`
  ${LinkStyles};
`;

export default Link;
