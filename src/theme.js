// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#002D72', // Тёмно-синий цвет ВТБ
        },
        secondary: {
            main: '#0077C8', // Светло-синий цвет ВТБ
        },
        background: {
            default: '#F5F5F5', // Серый цвет для фона
        },
        error: {
            main: '#FF0000', // Красный цвет для ошибок
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        button: {
            textTransform: 'none',
        },
    },
});

export default theme;
