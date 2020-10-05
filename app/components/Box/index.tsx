import styled, { css } from 'styled-components';
import { Sizes } from '../../typing';

interface BoxProps {
    shadow?: boolean;
    transparent?: boolean;
    size?: keyof Sizes;
    fitted?: boolean;
    selected?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({
        shadow, transparent, size = 'medium', theme, selected, fitted,
    }) => css`
    padding: ${theme.spacing[size]} ${!fitted ? theme.spacing[size] : '4px'};
    width: 100%;
    border-radius: ${shadow ? theme.borderRadius[size] : 0};
    box-shadow: ${shadow ? '0 4px 12px -1px rgba(0,0,0,.1)' : 'none'};
    background-color: ${!transparent ? theme.palette.common[selected ? 'gray' : 'white'] : 'transparent'};
  `};
`;

export default Box;
