// theme.ts
import { createTheme } from '@mui/material/styles';

// 1. Define color palette variables
export const COLORS = {
  primary: {
    main: '#4052B5',
    light: 'rgba(64, 82, 181, 0.9)',
    veryLight: '#c5cae9',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '',
    light: '#d05ce3',
    dark: '#fcc419',
    contrastText: '#efe66a',
  },
  error: {
    main: '#d32f2f',
  },
  background: {
    default: '#f6f4f0',
    paper: '#ffffff',

  },
  text: {
    primary: '#242424',
    secondary: '#757575',

  },
};

// 2. Create theme
const theme = createTheme({
  palette: {
    primary: { ...COLORS.primary },
    secondary: { ...COLORS.secondary },
    error: { ...COLORS.error },
    background: { ...COLORS.background },
    text: { ...COLORS.text },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,

    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 834,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1rem',
        },
      },
    },
  },
});

export default theme;
