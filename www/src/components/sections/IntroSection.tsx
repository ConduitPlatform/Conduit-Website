import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button, Grid, Grow } from '@mui/material';
import Illustration from '../../../public/icons/Illustration';
import { styled } from '@mui/material/styles';
import { ArrowForwardIos } from '@mui/icons-material';
import Link from '../../Link';
import { SxObject } from '../../models/SxObjects';

const styles: SxObject = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
};

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
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
            {`Build a flexible, fully customizable backend server, using Conduit.
            Conduit is a NodeJS-based Backend as a Service,
             that aims to cut down development times by providing ready-made modules that offer common functionality out of the box.`}
          </Typography>
          <StyledBox my={8}>
            <Button
              component={Link}
              href={'/docs'}
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIos />}>
              GET STARTED
            </Button>

            <Box style={{ flexGrow: '1' }}>
              <SyntaxHighlighter style={duotoneLight}>
                {'curl .... docker compose'}
              </SyntaxHighlighter>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Grow in={true} timeout={{ enter: 1000 }}>
            <Box>
              <Illustration />
            </Box>
          </Grow>

          {/* <Image src={workspace} alt="workspace" /> */}
        </Grid>
      </Grid>
    </Box>
  );
}
