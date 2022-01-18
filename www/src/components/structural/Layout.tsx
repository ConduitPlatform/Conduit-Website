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
      <Box
        sx={{
          minHeight: 'calc(100vh - 90px)',
          background: (theme) =>
            // eslint-disable-next-line max-len
            `linear-gradient(180deg, ${theme.palette.background.paper} 27%, ${theme.palette.background.default} 89%)`,
        }}>
        {children}
      </Box>
      <Divider sx={styles.dividerSpacing} />
      <Footer />
    </Box>
  );
};

export default Layout;
