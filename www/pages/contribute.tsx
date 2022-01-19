import { Box, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const ContributePaperComponent = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '8px',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '& > *': {
    flex: '1 1 50%',
  },
}));

const ATagComponent = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

export default function Contribute() {
  return (
    <Container maxWidth={'lg'} sx={{ pt: [4, 8, 12] }}>
      <Heading textAlign="center" variant="h4" padding="25px">
        Contribute to Conduit
      </Heading>
      <ContributePaperComponent elevation={1} style={{ border: '1px solid black' }}>
        <Box>
          <Typography padding="20px" variant="h5">
            Conduit + Community = 💖
          </Typography>
          <Typography padding="20px" variant="subtitle2">
            We strongly believe that the community around Conduit can really make the difference. No
            matter how experienced you are, if you like the idea behind the project and would like
            express your ideas via your code, simplifying the backend process for you and other
            Conduit members, you are more than welcome to join us!
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: (theme) => ['none', `1px solid ${theme.palette.secondary.main}`],
          }}>
          <Typography sx={{ padding: '20px' }} variant="h5">
            Welcoming environment
          </Typography>
          <Typography padding="20px" variant="subtitle2">
            In the interest of fostering an open and welcoming environment, we as contributors and
            maintainers pledge to making participation in our project and our community a
            harassment-free experience for everyone.
          </Typography>
          <Typography sx={{ padding: '20px' }} variant="h5">
            It’s empowering to be able to make changes, even small ones
          </Typography>
          <Typography padding="20px" variant="subtitle2">
            You don’t have to become a lifelong contributor to enjoy participating in open source.
            Have you ever seen a typo on a website, and wished someone would fix it? On an open
            source project, you can do just that. Open source helps people feel agency over their
            lives and how they experience the world, and that in itself is gratifying.
          </Typography>
          <Typography style={{ marginBottom: '-30px' }} padding="20px" variant="h5">
            <ATagComponent href="https://github.com/Quintessential-SFT/conduit/blob/master/CODE_OF_CONDUCT.md">
              Read our code of conduct ✊🏼
            </ATagComponent>
          </Typography>
          <Typography padding="20px" variant="subtitle2">
            Also refer to our{' '}
            <ATagComponent href="https://github.com/Quintessential-SFT/conduit#readme">
              readme
            </ATagComponent>
          </Typography>
          <Typography padding="20px" variant="h5">
            Join us on social platforms!
          </Typography>
          <Typography padding="20px" variant="subtitle2">
            <ul style={{ marginTop: '-10px' }}>
              <li>Matrix</li>
              <li>Discord</li>
            </ul>
          </Typography>
        </Box>
      </ContributePaperComponent>
    </Container>
  );
}
