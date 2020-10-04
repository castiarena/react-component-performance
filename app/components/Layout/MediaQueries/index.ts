import { css } from 'styled-components';

const customMediaQuery = (maxWidth: number) => css`@media (max-width: ${maxWidth}px)`;

const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
};

export default media;
