import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';

export default function Landing() {
  return (
    <Box sx={{ my: 22 }}>
      <Typography style={{ textAlign: 'center' }} variant="button" component="h1" gutterBottom>
        Stop making the same stuff twice
      </Typography>
      <Grid container spacing={10} padding={'30px'}>
        <Grid item xs={3}>
          <Paper style={{ height: '140px', backgroundColor: '#262840' }}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: '140px', backgroundColor: '#262840' }}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: '140px', backgroundColor: '#262840' }}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: '140px', backgroundColor: '#262840' }}></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
