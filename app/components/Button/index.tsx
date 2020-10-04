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
        }
        return css`
          background-color: ${color.main};
          color: ${color.contrast};
          transition: background-color .2s ease-out;
          &:hover {
            cursor: pointer;
            background-color: ${color.hover};
          }
          &:active, &:focus {
            outline: none;
          }
        `;
    }};
`;

const Button = styled.button<ButtonProps>`${ButtonStyles}`;

export default Button;
