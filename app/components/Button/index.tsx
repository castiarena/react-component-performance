import styled, { css } from 'styled-components';

export interface ButtonProps {
    kind?: 'primary' | 'secondary';
}

export const ButtonStyles = css<ButtonProps>`
    border: none;
    padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.large}`};
    border-radius: ${({ theme }) => theme.borderRadius.smaller};
    ${({ theme, kind = 'primary' }) => {
        let color = theme.palette.primary;
        if (kind === 'secondary') {
            color = theme.palette[kind];
            return css`
              transition: background-color .2s ease-out;
              border: 1px solid ${color.main};
              color: ${color.main};
              background-color: ${color.contrast};
              &:hover {
                color: ${color.contrast};
                background-color: ${color.hover};
                border: 1px solid ${color.hover};
              }   
            `;
        }
        return css`
          transition: background-color .2s ease-out;
          background-color: ${color.main};
          color: ${color.contrast};
          &:hover {
            background-color: ${color.hover};
          }
        `;
    }};
    
    &:hover {
      cursor: pointer;      
    }
    
    &:active, &:focus {
      outline: none;
    }
`;

const Button = styled.button<ButtonProps>`${ButtonStyles}`;

export default Button;
