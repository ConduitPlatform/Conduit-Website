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
      <Typography
        style={{ textAlign: 'center', color: 'white' }}
        variant="h4"
        component="h1"
        gutterBottom>
        The only Backend you'll ever need
      </Typography>
      <Typography
        style={{ textAlign: 'center', color: 'white' }}
        variant="h6"
        component="h1"
        gutterBottom>
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
      <Box sx={{ my: 22 }}>
        <Grid container>
          <Grid item sm={3} xs={1}></Grid>
          <Grid item sm={6} xs={10}>
            <Typography
              style={{ marginTop: '30px', color: 'white' }}
              variant="caption"
              component="h1"
              gutterBottom>
              Start here:
            </Typography>
            <SyntaxHighlighter style={darcula}>{'curl .... docker compose'}</SyntaxHighlighter>
          </Grid>
          <Grid item sm={3} xs={1}></Grid>
        </Grid>
      </Box>

      <Typography style={{ textAlign: 'center', marginTop: '60px', color: 'white' }}>
        Used by
      </Typography>
      <Paper variant="outlined" style={{ height: '80px' }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid textAlign={'center'} item sm={4}>
            Icon
          </Grid>
          <Grid textAlign={'center'} item sm={4}>
            Icon
          </Grid>
          <Grid textAlign={'center'} item sm={4}>
            Icon
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
