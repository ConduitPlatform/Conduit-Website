import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Container, Divider, Typography } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ my: 4 }}>
      <Landing1 />
      <Landing2 />
      <Divider sx={{ my: 8 }}>
        <Typography>To whom we are addressing</Typography>
      </Divider>
      <LandingPageUsers />
    </Container>
  );
}
