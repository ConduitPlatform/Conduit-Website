import * as React from 'react';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';
import { Box, Container, Divider, Typography } from '@mui/material';
import LandingPageUsers from '../src/components/structural/LandingPage/LandingPageUsers';
import theme from '../src/theme';

export default function Index() {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, ${theme.palette.background.default} 27%, ${theme.palette.background.paper} 89%)`,
      }}>
      <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
        <Landing1 />
        <Divider sx={{ my: 8 }}>
          <Typography>To whom we are addressing</Typography>
        </Divider>
        <LandingPageUsers />
        <Landing2 />
      </Container>
    </Box>
  );
}
