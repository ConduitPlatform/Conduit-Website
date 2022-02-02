import * as React from 'react';
import { Box, Container } from '@mui/material';
import Roadmap from '../src/components/sections/Roadmap';
import FadeOnScrollSection from '../src/components/custom/FadeOnScrollSection';
import IntroSection from '../src/components/sections/IntroSection';
import ModulesSection from '../src/components/sections/ModulesSection';
import AboutUsSection from '../src/components/sections/AboutUsSection';
import ContributeSection from '../src/components/sections/ContributeSection';
import CoreSection from '../src/components/sections/CoreSection';
import UsageSection from '../src/components/sections/UsageSection';
import { SxObject } from '../src/models/SxObjects';
const styles: SxObject = {
  root: {
    pt: [4, 8, 12],
    paddingX: [0, 0],
    '.sectionSpacing': {
      paddingX: [2, 2, 3],
    },
  },
};
export default function Index() {
  return (
    <Container maxWidth={'xl'} sx={styles.root}>
      <Box className={'sectionSpacing'}>
        <IntroSection />
        <FadeOnScrollSection>
          <UsageSection />
        </FadeOnScrollSection>
        <FadeOnScrollSection>
          <CoreSection />
        </FadeOnScrollSection>
      </Box>
      <FadeOnScrollSection>
        <ModulesSection />
      </FadeOnScrollSection>
      <Box className={'sectionSpacing'}>
        <FadeOnScrollSection>
          <ContributeSection />
        </FadeOnScrollSection>
        <FadeOnScrollSection>
          <Roadmap />
        </FadeOnScrollSection>
        <FadeOnScrollSection>
          <AboutUsSection />
        </FadeOnScrollSection>
      </Box>
    </Container>
  );
}
