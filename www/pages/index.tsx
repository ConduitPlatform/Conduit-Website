import * as React from 'react';
import { Container } from '@mui/material';
import LandingPageUsers from '../src/components/sections/LandingPageUsers';
import Roadmap from '../src/components/sections/Roadmap';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';
import IntroSection from '../src/components/sections/IntroSection';
import UsedBySection from '../src/components/custom/UsedBySection';
import ModulesSection from '../src/components/sections/ModulesSection';
import AboutUsSection from '../src/components/sections/AboutUsSection';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <IntroSection />
      <FadeOnScrollSection>
        <UsedBySection />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <LandingPageUsers />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <ModulesSection />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <Roadmap />
      </FadeOnScrollSection>

      <FadeOnScrollSection>
        <AboutUsSection />
      </FadeOnScrollSection>
    </Container>
  );
}
