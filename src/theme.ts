import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: 'rgba(34, 34, 34, 1)',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: 'rgba(195, 198, 200, 1)',
      main: 'rgba(147, 149, 151, 1)',
      dark: 'rgba(101, 103, 105, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(255, 255, 126, 1)',
      main: 'rgba(244, 222, 75, 1)',
      dark: 'rgba(190, 173, 9, 1)',
      contrastText: 'rgba(34, 34, 34, 1)',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(34, 34, 34, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1,
      color: '#333',
    },
    h2: {
      letterSpacing: '-.025em',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 2.5,
      color: '#333',
    },
    h3: {
      color: '#333',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.75,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#222',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#555',
    },
  },
});

export default responsiveFontSizes(theme);
