import * as React from 'react';
import { Box, Container, Divider } from '@mui/material';
import LandingPageUsers from '../src/components/sections/LandingPageUsers';
import Roadmap from '../src/components/sections/Roadmap';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';
import IntroSection from '../src/components/sections/IntroSection';
import UsedBySection from '../src/components/custom/UsedBySection';
import ModulesSection from '../src/components/sections/ModulesSection';
import AboutUsSection from '../src/components/sections/AboutUsSection';
import ContributeSection from '../src/components/sections/ContributeSection';
import CoreSection from '../src/components/sections/CoreSection';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <IntroSection />
      <FadeOnScrollSection>
        <Box>
          <UsedBySection />
          <Box my={[4, 8]}>
            <Divider />
          </Box>
        </Box>
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <LandingPageUsers />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <CoreSection />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <ModulesSection />
      </FadeOnScrollSection>

      <FadeOnScrollSection>
        <ContributeSection />
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
