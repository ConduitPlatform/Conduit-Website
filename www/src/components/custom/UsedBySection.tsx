import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, SxProps, Theme } from '@mui/material';
import Paralos from '../../../public/icons/White.svg';
import Quint from '../../../public/icons/quint-logo.svg';
import Sports from '../../../public/icons/2sports.svg';

const svgResponsiveStyle: SxProps = {
  '& *': {
    fill: (theme: Theme) => theme.palette.text.primary,
  },
};

export default function UsedBySection() {
  return (
    <Box mt={8}>
      <Grid container justifyContent="space-around" alignItems="center" gap={3} padding={3}>
        <Box sx={svgResponsiveStyle}>
          <Paralos height="50" />
        </Box>
        <Box sx={svgResponsiveStyle}>
          <Quint height="50" />
        </Box>
        <Sports width={130} height="50" viewBox="0 0 377 144" />
      </Grid>
    </Box>
  );
}
