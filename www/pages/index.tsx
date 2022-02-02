import * as React from 'react';
import { Container, Box } from '@mui/material';
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
      <FadeOnScrollSection>
        <ContributeSection />
      </FadeOnScrollSection>
      <FadeOnScrollSection>
        <AboutUsSection />
      </FadeOnScrollSection>
    </Container>
  );
}
