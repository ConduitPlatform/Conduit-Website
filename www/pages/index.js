import * as React from 'react';
import Box from '@mui/material/Box';
import Landing1 from '../src/components/structural/LandingPage/LandingPageUpper';
import Landing2 from '../src/components/structural/LandingPage/LandingPageLower';

export default function Index() {
  return (
    <Box sx={{ my: 4 }}>
      <Landing1 />
      <Landing2 />
    </Box>
  );
}
