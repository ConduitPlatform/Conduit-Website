import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#303030',
      default: '#262840',
    },
  },
  typography: {
    fontFamily: 'JetBrains Mono',
  },
});

export default theme;
