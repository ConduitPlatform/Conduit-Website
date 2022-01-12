import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Grid, Paper } from '@mui/material';

export default function Landing() {
  return (
    <Box sx={{ my: 12 }}>
      <Typography style={{ textAlign: 'center' }} variant="h4" component="h1" gutterBottom>
        The only Backend you'll ever need
      </Typography>
      <Typography style={{ textAlign: 'center' }} variant="h6" component="h1" gutterBottom>
        Built for
        <TypewriterComponent
          onInit={(typewriter) =>
            typewriter
              .typeString('The future')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Ease of use')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span style="color: #07D9C4; text-decoration: underline">You</span>')
              .start()
          }
        />
      </Typography>
      <Box sx={{ my: 22 }} padding={'20px'}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Typography style={{ marginTop: '30px' }} variant="caption" component="h1" gutterBottom>
              Start here:
            </Typography>
            <SyntaxHighlighter style={darcula}>{'curl .... docker compose'}</SyntaxHighlighter>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>

      <Typography style={{ textAlign: 'center', marginTop: '60px' }}>Used by</Typography>
      <Paper style={{ height: '80px', backgroundColor: '#262840' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid textAlign={'center'} item xs={4}>
            Icon
          </Grid>
          <Grid textAlign={'center'} item xs={4}>
            Icon
          </Grid>
          <Grid textAlign={'center'} item xs={4}>
            Icon
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
