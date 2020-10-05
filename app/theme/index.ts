import { DefaultTheme } from 'styled-components';

const customTheme: DefaultTheme = {
    borderRadius: {
        smaller: '10px',
        small: '12px',
        medium: '20px',
        large: '24px',
    },
    spacing: {
        tiny: '4px',
        smaller: '12px',
        small: '16px',
        medium: '26px',
        large: '30px',
    },
    typography: {
        smaller: '.9em',
        small: '1em',
        medium: '1.3em',
        large: '2em',
    },
    palette: {
        common: {
            black: '#0A0A33',
            gray: '#F1F6FF',
            grayDark: '#7A7B92',
            white: '#FBFCFF',
        },
        primary: {
            main: '#0084ff',
            hover: '#a7c3dc',
            contrast: '#fff',
        },
        secondary: {
            main: '#709fb0',
            hover: '#84bcd0',
            contrast: '#fff',
        },
    },
};

export default customTheme;
