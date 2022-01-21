import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MiniInfoCard from '../custom/MiniInfoCard';
import { SxObject } from '../../models/SxObjects';
import Document from '../../../public/icons/icons8-document.svg';
import Edit from '../../../public/icons/icons8-edit.svg';
import Database from '../../../public/icons/icons8-menu.svg';
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
          imageComponent={<Database />}
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
          imageComponent={<Edit />}
          title={'Comfortable design'}
          subText={
            'Design easy enough to be used and understood by all kinds of developers.' +
            ' Design easy enough to be used and understood by all kinds of developers.'
          }
        />
        <MiniInfoCard
          className={'fullGrow'}
          imageComponent={<Document />}
          title={'Documentation'}
          subText={
            'Well written documentation on how to use every single functionality of the CMS.' +
            ' Well written documentation on how to use every single functionality of the CMS.'
          }
        />
      </Box>
    </Box>
  );
}
