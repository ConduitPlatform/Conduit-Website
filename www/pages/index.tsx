import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Container } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';
import Roadmap from '../src/components/structural/LandingPage/Roadmap';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <Landing1 />

      <FadeOnScrollSection>
        <LandingPageUsers />
      </FadeOnScrollSection>

      <FadeOnScrollSection>
        <Landing2 />
      </FadeOnScrollSection>

      <FadeOnScrollSection>
        <Roadmap />
      </FadeOnScrollSection>
    </Container>
  );
}
