import 'styled-components';

interface IPalette {
    main: string;
    contrast: string;
    hover: string;
}

interface Sizes {
    smaller: string;
    small: string;
    medium: string;
    large: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: Sizes;
        spacing: Sizes;
        typography: Sizes;
        palette: {
            common: {
                black: string;
                white: string;
            }
            primary: IPalette
            secondary: IPalette
        }
    }
}
