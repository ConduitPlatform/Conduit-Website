import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';

export default function UsedBySection() {
  return (
    <Box mt={8}>
      <Grid container justifyContent="space-around" alignItems="center" gap={3} padding={3}>
        <Paralos width="250" height="50" />
        <Quint width="250" height="50" />
        <Sports width="250" height="50" viewBox="0 0 377 144" />
      </Grid>
    </Box>
  );
}
