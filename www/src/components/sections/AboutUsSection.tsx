import { FC } from 'react';
import { Box } from '@mui/material';
import * as React from 'react';
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
        <AboutCard
          title={'Who powered conduit'}
          icon={<FaceIcon />}
          text={
            'Conduit was created in Quintessential, and as a technology company that develops premium software solutions, we wanted to create a platform that will allows us to move quicker and deliver better quality software each time.'
          }
        />
        <AboutCard
          title={'What we strive for'}
          icon={<Target />}
          text={
            'We want to deliver the most seamless backend experience possible. Even though Conduit is in a working state in the coming months we will work on requested changes/improvements and of course everyone is welcome to contribute.'
          }
        />
        <AboutCard
          title={'Going openSource'}
          icon={<OpenSource />}
          text={
            'Our passion for open source, communities and knowledge sharing leads us into crafting services and solutions and hosting events which empower innovation and networking.'
          }
        />
      </Box>
    </Box>
  );
};

export default AboutUsSection;
