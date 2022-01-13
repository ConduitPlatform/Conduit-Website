import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Grid, Paper } from '@mui/material';

const styles = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
} as any;

export default function Landing() {
  return (
    <Box sx={{ my: 12 }}>
      <Grid container>
        <Grid sx={styles.basicText} item md={6} sm={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            <strong> The only Backend you'll ever need</strong>
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            Built for
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) =>
                typewriter
                  .typeString('The future')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Ease of use')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<span style="color: #07D9C4; text-decoration: underline">You</span>')
                  .pauseFor(2000)
                  .start()
              }
            />
          </Typography>
          <Typography variant="body2" paddingTop={'50px'}>
            Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI
            components. An experience you'd expect from a design system.
          </Typography>
          <Box sx={{ my: 22 }}>
            <Grid container>
              <Grid item md={8} sm={12} xs={12}>
                <Typography variant="caption" component="h1" gutterBottom>
                  Start here:
                </Typography>
                <SyntaxHighlighter style={duotoneLight}>
                  {'curl .... docker compose'}
                </SyntaxHighlighter>
              </Grid>
              <Grid item sm={4} xs={1}></Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/15/05/cat-1292989_1280.png"
            width="100%"
            style={{ objectFit: 'contain', marginTop: '-80px' }}
          />
        </Grid>
      </Grid>

      <Typography style={{ textAlign: 'center', marginTop: '60px', color: 'white' }}>
        Used by
      </Typography>
      <Paper variant="outlined">
        <Grid container justifyContent="space-around" alignItems="center" padding={3}>
          <img
            src="https://supabase.com/images/logos/mozilla--grey.png"
            height={'50px'}
            style={{ objectFit: 'contain' }}
          />

          <img
            src="https://supabase.com/images/logos/mozilla--grey.png"
            height={'50px'}
            style={{ objectFit: 'contain' }}
          />

          <img
            src="https://supabase.com/images/logos/mozilla--grey.png"
            height={'50px'}
            style={{ objectFit: 'contain' }}
          />
        </Grid>
      </Paper>
    </Box>
  );
}
