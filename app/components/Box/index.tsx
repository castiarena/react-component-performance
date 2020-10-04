import styled, { css } from 'styled-components';
import { Sizes } from '../../typing';

interface BoxProps {
    shadow?: boolean;
    transparent?: boolean;
    size?: keyof Sizes;
    fitted?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({
        shadow, transparent, size = 'medium', theme,
    }) => css`
    padding: ${theme.spacing[size]};
    border-radius: ${shadow ? theme.borderRadius[size] : 'none'};
    box-shadow: ${shadow ? '0 4px 12px -1px rgba(0,0,0,.1)' : 'none'};
    background-color: ${!transparent ? theme.palette.common.white : 'transparent'};
  `};
`;

export default Box;
