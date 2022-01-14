import * as React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import MiniInfoCard from '../../custom/MiniInfoCard';
import StorageIcon from '@mui/icons-material/Storage';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const styles = {
  sectionLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    '.fullGrow': {
      flexGrow: 1,
      width: 250,
    },
  },
} as const;

export default function LandingPageUsers() {
  return (
    <>
      <Divider sx={{ my: 8 }}>
        <Typography>To whom we are addressing</Typography>
      </Divider>
      <Box sx={styles.sectionLayout}>
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<ArchitectureIcon />}
          title={'Comfortable design'}
          subText={
            'Design easy enough to be used and understood by all kinds of developers.' +
            ' Design easy enough to be used and understood by all kinds of developers.'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<StorageIcon />}
          title={'for developers'}
          subText={
            'For developers that look for easy and fast api.' +
            ' Build your own api, create your own endpoints,' +
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
      </Box>
    </>
  );
}
