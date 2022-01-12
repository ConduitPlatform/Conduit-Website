import * as React from 'react';
import { FC } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Copyright from '../../Copyright';

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxWidth={'xl'} sx={{ height: '100vh' }}>
        {children}
      </Container>
      <Copyright />
      <Footer />
    </Box>
  );
};

export default Layout;
