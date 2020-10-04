import styled, { css } from 'styled-components';

interface AlignDefinition {
    align?: 'center' | 'left' | 'right';
}

interface ColorDefinition {
    color?: string;
}

interface BoldDefinition {
    bold?: boolean;
}

type TypographyDefinition = AlignDefinition & ColorDefinition & BoldDefinition;

const typographyStyles = css<TypographyDefinition>`
  text-align: ${({ align = 'left' }) => align};
  color: ${({ color, theme }) => color || theme.palette.common.black};  
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};  
`;

export const Title = styled.h1<TypographyDefinition>`
  font-size: ${({ theme }) => theme.typography.large};
  margin: ${({ theme }) => `${theme.spacing.medium} 0 `};;
  ${typographyStyles};
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.medium};
  margin: ${({ theme }) => `${theme.spacing.medium} 0 `};;
  ${typographyStyles};
`;

export const Phar = styled.p`
  font-size: ${({ theme }) => theme.typography.small};  
  margin: ${({ theme }) => `${theme.spacing.smaller} 0 `};;
  ${typographyStyles};
`;
