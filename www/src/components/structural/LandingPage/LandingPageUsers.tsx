import * as React from 'react';
import { Box } from '@mui/material';
import MiniInfoCard from '../../custom/MiniInfoCard';
import StorageIcon from '@mui/icons-material/Storage';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const styles = {
  sectionLayout: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: ['1fr', 'repeat(2,1fr)', 'repeat(3,1fr)'],
  },
};

export default function LandingPageUsers() {
  return (
    <Box sx={styles.sectionLayout}>
      <MiniInfoCard
        imageComponent={<ArchitectureIcon />}
        title={'Comfortable design'}
        subText={
          'Design easy enough to be used and understood by all kinds of developers. Design easy enough to be used and understood by all kinds of developers.'
        }
      />
      <MiniInfoCard
        imageComponent={<StorageIcon />}
        title={'for developers'}
        subText={
          'For developers that look for easy and fast api. Build your own api, create your own endpoints, use authentication as fast as posible, with a click of a button'
        }
      />
      <MiniInfoCard
        imageComponent={<PlagiarismIcon />}
        title={'Documentation'}
        subText={
          'Well written documentation on how to use every single functionality of the CMS. Well written documentation on how to use every single functionality of the CMS.'
        }
      />
    </Box>
  );
}
