import * as React from 'react';
import { Container } from '@mui/material';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';
import IntroSection from '../src/components/sections/IntroSection';
import ModulesSection from '../src/components/sections/ModulesSection';
import AboutUsSection from '../src/components/sections/AboutUsSection';
import ContributeSection from '../src/components/sections/ContributeSection';
import CoreSection from '../src/components/sections/CoreSection';
import UsageSection from '../src/components/sections/UsageSection';

export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <IntroSection />
      <FadeOnScrollSection>
        <UsageSection />
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
        <AboutUsSection />
      </FadeOnScrollSection>
    </Container>
  );
}
