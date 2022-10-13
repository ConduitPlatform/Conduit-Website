import { PaletteMode } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';

const primary = '#5B44F2';
const secondary = '#07D9C4';
const error = '#DC004E';
const warning = '#E265AB';

const paletteDark: PaletteOptions = {
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
    paper: '#202030',
    default: '#262840',
  },
};

const paletteLight: PaletteOptions = {
  primary: {
    main: secondary,
    contrastText: '#fff',
  },
  secondary: {
    main: primary,
    contrastText: '#fff',
  },
  error: {
    main: error,
    contrastText: '#fff',
  },
  warning: {
    main: warning,
  },
  background: {
    paper: '#E8E7E7',
    default: '#F2F2F2',
  },
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? paletteLight : paletteDark),
  },
  typography: {
    fontFamily: 'JetBrains Mono',
  },
});

export default getDesignTokens;
