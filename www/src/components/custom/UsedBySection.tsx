import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';

export default function UsedBySection() {
  return (
    <Box mt={[8, 12]}>
      <Divider>
        <Typography>USED BY</Typography>
      </Divider>
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
