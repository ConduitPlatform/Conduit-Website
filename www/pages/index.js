import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Container } from '@mui/material';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ my: 4 }}>
      <Landing1 />
      <Landing2 />
    </Container>
  );
}
