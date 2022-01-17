import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button, Grid } from '@mui/material';
import Illustration from '../../../public/icons/Illustration';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const styles = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
} as any;

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: 20,
}));

export default function IntroSection() {
  return (
    <Box>
      <Grid container>
        <Grid sx={styles.basicText} item md={6} sm={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            <strong>{`The only Backend you'll ever need`}</strong>
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
            {`Build a beautiful, modern website with flexible, fully customizable,
             atomic Material-UI components. An experience you'd expect from a design system.`}
          </Typography>
          <StyledBox sx={{ my: 22 }}>
            <Button size="large" variant="outlined" color="secondary">
              GET STARTED
            </Button>
            <Box style={{ flexGrow: '1' }}>
              <SyntaxHighlighter style={duotoneLight}>
                {'curl .... docker compose'}
              </SyntaxHighlighter>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item md={6} sm={12}>
          <Illustration />
          {/* <Image src={workspace} alt="workspace" /> */}
        </Grid>
      </Grid>
    </Box>
  );
}
