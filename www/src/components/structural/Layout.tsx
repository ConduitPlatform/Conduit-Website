import * as React from 'react';
import { FC } from 'react';
import { Box, Divider } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const styles = {
  dividerSpacing: {
    mt: 2,
  },
} as const;

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 90px)' }}>{children}</Box>
      <Divider sx={styles.dividerSpacing} />
      <Footer />
    </Box>
  );
};

export default Layout;
