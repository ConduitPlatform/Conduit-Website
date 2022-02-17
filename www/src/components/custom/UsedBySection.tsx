import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';
import Agora from '../../../public/icons/agora-logo.svg';

export default function UsedBySection() {
  return (
    <Box mt={8}>
      <Grid container justifyContent="space-around" alignItems="center" gap={3} padding={3}>
        <Paralos width={220} height={70} />
        <Quint width={220} height={70} />
        <Agora width={70} height={70} />
        <Sports width={220} height={70} viewBox="0 0 377 144" />
      </Grid>
    </Box>
  );
}
