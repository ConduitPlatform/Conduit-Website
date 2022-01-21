import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ImageSectionCard from '../custom/ImageSectionCard';
import ToolIcon from '../../../public/icons/services.svg';
import LockIcon from '../../../public/icons/lock.svg';
import ApiIcon from '../../../public/icons/connect.svg';
import { SxObject } from '../../models/SxObjects';
import MemoryIcon from '@mui/icons-material/Memory';
import Link from 'next/Link';

const styles: SxObject = {
  childrenGrow: {
    '& > *': {
      flexGrow: 1,
      width: '350px',
      maxWidth: '650px',
    },
  },
};

const CoreSection: FC = () => {
  return (
    <Box mt={[12, 16]}>
      <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
        <MemoryIcon sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
        <strong>Conduit Core</strong>
      </Typography>
      <Typography mb={4}>
        This is the core package of Conduit, which contains the server and common
        <strong> functionalities</strong>.
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        sx={styles.childrenGrow}
        gap={4}>
        <Link href={'/docs/core/router'}>
          <ImageSectionCard
            subText={
              'This module should provide a way to generate routes both for REST and GraphQL APIs, along with documentation.'
            }
            title={'Router'}
            image={<ApiIcon />}
          />
        </Link>
        <Link href={'/docs/core/security'}>
          <ImageSectionCard
            flexDirection={'row-reverse'}
            subText={
              'This will be added as a required middleware, configurable on how strict is should be'
            }
            title={'Security'}
            image={<LockIcon />}
          />
        </Link>
        <Link href={'/docs/core/config'}>
          <ImageSectionCard
            subText={
              'This is the basic module used to add modules to conduit and update configuration.'
            }
            title={'Config'}
            image={<ToolIcon />}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default CoreSection;
