import 'styled-components';
import { Sizes } from '.';

interface IPalette {
    main: string;
    contrast: string;
    hover: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: Sizes;
        spacing: {tiny: string} & Sizes;
        typography: Sizes;
        palette: {
            common: {
                black: string;
                gray: string;
                grayDark: string;
                white: string;
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}
