import * as React from 'react';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Copyright from '../../Copyright';

const Footer: FC = () => {
  return (
    <Box paddingY={4} paddingX={2}>
      <Box
        margin={'auto'}
        maxWidth={'xl'}
        mb={4}
        display={'grid'}
        gridTemplateColumns={'1fr 1fr 1fr 1fr'}
        gap={1}>
        <Box display={'grid'} justifyContent={'center'}>
          <Typography>
            <strong>Title</strong>
          </Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
        </Box>
        <Box display={'grid'} justifyContent={'center'}>
          <Typography>
            <strong>Title</strong>
          </Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
        </Box>
        <Box display={'grid'} justifyContent={'center'}>
          <Typography>
            <strong>Title</strong>
          </Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
        </Box>
        <Box display={'grid'} justifyContent={'center'}>
          <Typography>
            <strong>Title</strong>
          </Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
          <Typography variant={'body2'}>sub item</Typography>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
};

export default Footer;
