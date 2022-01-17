import * as React from 'react';
import { Container } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';
import Roadmap from '../src/components/structural/LandingPage/Roadmap';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';
import IntroSection from '../src/components/structural/LandingPage/IntroSection';
import UsedBySection from '../src/components/custom/UsedBySection';
import ModulesSection from '../src/components/structural/LandingPage/ModulesSection';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <IntroSection />
      <UsedBySection />
      <FadeOnScrollSection>
        <LandingPageUsers />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <ModulesSection />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <Roadmap />
      </FadeOnScrollSection>
    </Container>
  );
}
