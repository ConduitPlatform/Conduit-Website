import { FC } from 'react';
import { Box, Divider } from '@mui/material';
import * as React from 'react';
import TrackChangesTwoToneIcon from '@mui/icons-material/TrackChangesTwoTone';
import Image from 'next/Image';
import openSource from '../../../public/icons/open-source-fill.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AboutCard from '../custom/AboutCard';

const AboutUsSection: FC = () => {
  return (
    <Box mb={16}>
      <Divider sx={{ mt: [8, 16, 24], mb: 8 }}>ABOUT US</Divider>
      <Box display={'grid'} gap={2}>
        <AboutCard
          title={'WHO POWERED CONDUIT'}
          icon={<AccountCircleIcon color={'inherit'} sx={{ width: 80, height: 80 }} />}
          text={
            "Conduit is powered by Quintessential. Quintessential is a technology company that develops premium software solutions for internal use and third-party clients. Quintessential is deeply concerned about Design and Development in every product that is being managed or developed under it's guidance."
          }
        />
        <AboutCard
          title={'WHAT WE STRIVE FOR'}
          icon={<TrackChangesTwoToneIcon color={'error'} sx={{ width: 80, height: 80 }} />}
          text={
            'We want to deliver the best CMS possible. Even though Conduit is in a working state in the coming months we will work on requested changes/improvements and of course everyone is welcome to contibute.'
          }
        />
        <AboutCard
          title={'GOING OPENSOURCE'}
          icon={
            <Box
              sx={{
                height: '80px',
                width: '80px',
                overflow: 'hidden',
                position: 'relative',
              }}>
              <Image alt="Mountains" layout="responsive" src={openSource} objectFit={'contain'} />
            </Box>
          }
          text={
            'Our passion for open source, communities and knowledge sharing leads us into crafting services and solutions and hosting events which empower innovation and networking.'
          }
        />
      </Box>
    </Box>
  );
};

export default AboutUsSection;
