import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {} from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Landing() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 22 }} justifyContent={'center'} display={'grid'}>
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
        <Box mt={'70px'}>
          <Typography style={{ marginTop: '30px' }} variant="caption" component="h1" gutterBottom>
            Start here:
          </Typography>
          <SyntaxHighlighter style={darcula}>{'curl .... docker compose'}</SyntaxHighlighter>
        </Box>
      </Box>
    </Container>
  );
}
