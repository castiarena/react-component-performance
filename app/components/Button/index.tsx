import styled, { css } from 'styled-components';

interface ButtonProps {
    kind?: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
    border: none;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    ${({ theme, kind = 'primary' }) => {
        let color = theme.palette.primary;
        if (kind === 'secondary') {
            color = theme.palette[kind];
        }
        return css`
          background-color: ${color.main};
          color: ${color.contrast};
          
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

export default Button;
