import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ToolIcon from '../../../public/icons/services.svg';
import LockIcon from '../../../public/icons/lock.svg';
import ApiIcon from '../../../public/icons/connect.svg';
import { SxObject } from '../../models/SxObjects';
import MemoryIcon from '@mui/icons-material/Memory';
import Link from 'next/link';
import MiniInfoCard from '../custom/MiniInfoCard';

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
      <Typography mb={3} alignItems={'center'} display={'flex'} variant={'h4'}>
        <MemoryIcon sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
        <strong>Conduit Core</strong>
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        sx={styles.childrenGrow}
        gap={4}>
        <Link href={'/docs/modules/router'} passHref>
          <MiniInfoCard
            className={'fullGrow'}
            imageComponent={<ApiIcon />}
            sx={{ cursor: 'pointer' }}
            title={'Router'}
            subText={
              'Conduit router provides a simple way to register routes for REST ' +
              'GraphQL APIs, as well as Web Sockets. '
            }
          />
        </Link>
        <Link href={'/docs/modules/router/Login-Methods'} passHref>
          <MiniInfoCard
            className={'fullGrow'}
            imageComponent={<LockIcon />}
            sx={{ cursor: 'pointer' }}
            title={'Security'}
            subText={
              'Rate limiting and Client Id/Secret authentication by default to keep you safe'
            }
          />
        </Link>
        <Link href={'/docs/config'} passHref>
          <MiniInfoCard
            className={'fullGrow'}
            imageComponent={<ToolIcon />}
            sx={{ cursor: 'pointer' }}
            title={'Config'}
            subText={`Configuration management, liveliness checks and service discovery baked-in.`}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default CoreSection;
