import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Landing from '../src/components/structural/LandingPage/LandingPageUpper';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Landing />
      </Box>
    </Container>
  );
}
