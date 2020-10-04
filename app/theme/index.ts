import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    borderRadius: {
        smaller: '10px',
        small: '12px',
        medium: '18px',
        large: '24px',
    },
    spacing: {
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
            black: '#222831',
            white: '#fafafa',
        },
        primary: {
            main: '#726a95',
            hover: '#8d83b8',
            contrast: '#fff',
        },
        secondary: {
            main: '#709fb0',
            hover: '#84bcd0',
            contrast: '#fff',
        },
    },
};

export default theme;
