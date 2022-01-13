import { createTheme } from '@mui/material/styles';

const primary = '#5B44F2';
const secondary = '#07D9C4';
const error = '#DC004E';
const warning = '#E265AB';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primary,
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: secondary,
      contrastText: '#000',
    },
    error: {
      main: error,
      contrastText: '#fff',
    },
    warning: {
      main: warning,
    },
    background: {
      paper: '#1F2034',
      default: '#262840',
    },
  },
  typography: {
    fontFamily: 'JetBrains Mono',
  },
});

export default theme;
