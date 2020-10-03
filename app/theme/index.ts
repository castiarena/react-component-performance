import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    borderRadius: {
        small: '12px',
        medium: '18px',
        large: '24px',
    },
    spacing: {
        small: '16px',
        medium: '26px',
        large: '30px',
    },
    palette: {
        common: {
            black: '#222831',
            white: '#fff',
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
