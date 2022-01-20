import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MiniInfoCard from '../custom/MiniInfoCard';
import StorageIcon from '@mui/icons-material/Storage';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { SxObject } from '../../models/SxObjects';

const styles: SxObject = {
  sectionLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    '.fullGrow': {
      flexGrow: 1,
      width: 250,
    },
  },
};

export default function LandingPageUsers() {
  return (
    <Box mt={[8, 12, 16]}>
      <Typography py={3} variant={'h4'}>
        <strong>Why Choose us?</strong>
      </Typography>
      <Box sx={styles.sectionLayout}>
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<StorageIcon />}
          title={'for developers'}
          subText={
            'For developers that look for easy and fast api.' +
            ' Build your own server, create your own endpoints,' +
            ' use authentication as fast as posible,' +
            ' with a click of a button'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<PlagiarismIcon />}
          title={'Documentation'}
          subText={
            'Well written documentation on how to use every single functionality of the CMS.' +
            ' Well written documentation on how to use every single functionality of the CMS.'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<ArchitectureIcon />}
          title={'Comfortable design'}
          subText={
            'Design easy enough to be used and understood by all kinds of developers.' +
            ' Design easy enough to be used and understood by all kinds of developers.'
          }
        />
      </Box>
    </Box>
  );
}
