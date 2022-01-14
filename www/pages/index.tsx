import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Container } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';
import Roadmap from '../src/components/structural/LandingPage/Roadmap';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <Landing1 />
      <LandingPageUsers />
      <Landing2 />
      <Roadmap />
    </Container>
  );
}
