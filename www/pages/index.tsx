import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Box, Container, Divider, Typography } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';

export default function Index() {
  return (
    <Box sx={{ background: 'linear-gradient(0deg, rgba(38,40,64,1) 27%, rgba(31,32,52,1) 89%)' }}>
      <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
        <Landing1 />
        <Divider sx={{ my: 8 }}>
          <Typography>To whom we are addressing</Typography>
        </Divider>
        <LandingPageUsers />
        <Landing2 />
      </Container>
    </Box>
  );
}
