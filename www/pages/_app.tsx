import React, { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/structural/Layout';
import { PaletteMode, responsiveFontSizes } from '@mui/material';
import getDesignTokens from '../src/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import posthog from 'posthog-js';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

const ConduitApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mode, setMode] = useState<PaletteMode>('dark');

  useEffect(() => {
    const storedMode = localStorage?.getItem('theme');
    if (storedMode) {
      setMode(storedMode === 'dark' ? 'dark' : 'light');
    }
  }, []);

  if (typeof window !== 'undefined' && !window.location.href.includes('http://localhost:3000/')) {
    posthog.init('<phc_dCXInoPKB2vBuv8KHH6VTl0jmir9BdIuVsdF6maILE0>', {
      api_host: '<https://app.posthog.com>',
    });
  }

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          localStorage?.setItem('theme', prevMode === 'light' ? 'dark' : 'light');
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => {
    const newTheme = createTheme(getDesignTokens(mode));
    return responsiveFontSizes(newTheme);
  }, [mode]);

  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...SEO} />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default ConduitApp;

ConduitApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
