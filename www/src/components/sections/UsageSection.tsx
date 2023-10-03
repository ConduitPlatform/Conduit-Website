import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MiniInfoCard from '../custom/MiniInfoCard';
import { SxObject } from '../../models/SxObjects';
import Document from '../../../public/icons/icons8-document.svg';
import Monitoring from '../../../public/icons/monitoring.svg';
import Dev from '../../../public/icons/dev.svg';
import RecommendIcon from '@mui/icons-material/Recommend';

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

export default function UsageSection() {
  return (
    <Box mt={[12, 16]}>
      <Typography py={3} alignItems={'center'} display={'flex'} variant={'h4'}>
        <RecommendIcon sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
        <strong>Why Choose Conduit?</strong>
      </Typography>
      <Box sx={styles.sectionLayout}>
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<Dev />}
          title={'For Developers'}
          subText={
            'Conduit provides you with APIs that are simple to work with, yet highly customizable. ' +
            ' Build your own server, create your own endpoints,' +
            ' use authentication as fast as possible,' +
            ' with a click of a button'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<Monitoring />}
          title={'Monitoring'}
          subText={
            'Monitor your module health, latency and traffic. Integrated, yet extendable, allowing you to use third party dashboards.'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<Document />}
          title={'Tons of Features'}
          subText={
            'Modules, covering the vast majority of features your applications could depend on. A modern SDK, allowing you to implement custom functionality as you see fit.'
          }
        />
      </Box>
    </Box>
  );
}
