import * as React from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';
import OpenSource from '../../../public/icons/check.svg';
import Target from '../../../public/icons/wikimapia.svg';
import FaceIcon from '../../../public/icons/futurama.svg';

import AboutCard from '../custom/AboutCard';
import CustomDivider from '../custom/CustomDivider';

const styles = {
  cardLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    '& > *': {
      flex: '1 1 30%',
      minWidth: 320,
    },
  },
} as const;

const AboutUsSection: FC = () => {
  return (
    <Box mb={16}>
      <CustomDivider>ABOUT US</CustomDivider>
      <Box sx={styles.cardLayout}>
        <Box>
          <AboutCard
            title={'Who'}
            icon={<FaceIcon />}
            text={
              'Conduit was created from a group of individuals that love technology and always strive to create the best software possible. Having worked many years creating custom software, we realized there was room for improvement.'
            }
          />
        </Box>
        <Box>
          <AboutCard
            title={'Our Goal'}
            icon={<Target />}
            text={
              'We want to provide the best BaaS system, without the limitations that similar solutions enforce. We want Conduit to fit in your workflow with ease without the requirement to re-learn everything or cut features from your software because your are limited by our tech. We are committed in improving Conduit through community feedback and genuine software development.'
            }
          />
        </Box>
        <Box>
          <AboutCard
            title={'Going openSource'}
            icon={<OpenSource />}
            text={
              "Conduit wouldn't be possible without the awesome OSS libraries that power it. Thus, it was a simple decision for us to give back to the open-source community that has fundamentally changed software development."
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
