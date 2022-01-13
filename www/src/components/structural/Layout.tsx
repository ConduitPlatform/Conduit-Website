import * as React from 'react';
import { FC } from 'react';
import { Box, Container, Divider } from '@mui/material';
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
      <Container maxWidth={'xl'} sx={{ minHeight: '100vh' }}>
        {children}
      </Container>
      <Divider sx={styles.dividerSpacing} />
      <Footer />
    </Box>
  );
};

export default Layout;
