import * as React from 'react';
import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Footer: FC = () => {
  return (
    <Box paddingY={3} paddingX={2}>
      <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={4}>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>item</Typography>
        <Typography align={'center'}>itemitem</Typography>
        <Typography align={'center'}>item</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
