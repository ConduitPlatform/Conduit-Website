import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';
import Image from 'next/image';

export default function UsedBySection() {
  return (
    <Box>
      <Divider>
        <Typography>USED BY</Typography>
      </Divider>
      <Grid container justifyContent="space-around" alignItems="center" gap={3} padding={3}>
        <Image src={Paralos} alt="Paralos-logo" height={'50px'} width="250px" />
        <Image src={Quint} alt="Quint-logo" height={'50px'} width="250px" />
        <Image src={Sports} alt="Quint-logo" height={'50px'} width="250px" />
      </Grid>
    </Box>
  );
}
