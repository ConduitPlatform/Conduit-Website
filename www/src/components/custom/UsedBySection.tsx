import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';
import CustomDivider from './CustomDivider';

export default function UsedBySection() {
  return (
    <Box>
      <CustomDivider>USED BY</CustomDivider>
      <Grid container justifyContent="space-around" alignItems="center" gap={3} padding={3}>
        <Paralos width="250" height="50" viewBox="0 0 239 62" />
        <Quint width="250" height="50" viewBox="0 0 187 34" />
        <Box>
          <Sports width="250" height="50" viewBox="0 0 377 144" />
        </Box>
      </Grid>
    </Box>
  );
}
