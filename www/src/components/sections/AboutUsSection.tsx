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
            "Conduit is powered by Quintessential. Quintessential is a technology company that develops premium software solutions for internal use and third-party clients. Quintessential is deeply concerned about Design and Development in every product that is being managed or developed under it's guidance."
          }
        />
        <AboutCard
          title={'What we strive for'}
          icon={<Target />}
          text={
            'We want to deliver the most seamless backend experience possible. Even though Conduit is in a working state in the coming months we will work on requested changes/improvements and of course everyone is welcome to contibute.'
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
