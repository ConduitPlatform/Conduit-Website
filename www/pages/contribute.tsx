import * as React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

const ContributePaperComponent = styled(Paper)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '8px',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

const ATagComponent = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

const TypographyComponent = styled(Typography)(({ theme }) => ({
  padding: '18px',
}));

export default function Contribute() {
  return (
    <Container maxWidth={'lg'} sx={{ pt: [2, 4, 8] }}>
      <Link href={'/'} passHref>
        <Button sx={{ marginLeft: [0, 0, 0, 6] }} color={'inherit'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>
      <Heading textAlign="center" variant="h4" padding="25px">
        Contribute to Conduit
      </Heading>
      <ContributePaperComponent elevation={1} style={{ border: '1px solid black' }}>
        <Box>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            Conduit + Community = 💖
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            We strongly believe that the community around Conduit can really make the difference. No
            matter how experienced you are, if you like the idea behind the project and would like
            express your ideas via your code, simplifying the backend process for you and other
            Conduit members, you are more than welcome to join us!
          </TypographyComponent>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            Welcoming environment
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            In the interest of fostering an open and welcoming environment, we as contributors and
            maintainers pledge to making participation in our project and our community a
            harassment-free experience for everyone.
          </TypographyComponent>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            It’s empowering to be able to make changes, even small ones
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            You don’t have to become a lifelong contributor to enjoy participating in open source.
            Have you ever seen a typo on a website, and wished someone would fix it? On an open
            source project, you can do just that. Open source helps people feel agency over their
            lives and how they experience the world, and that in itself is gratifying.
          </TypographyComponent>
        </Box>
        <Box
          sx={{
            borderLeft: (theme) => ['none', 'none', `1px solid ${theme.palette.secondary.main}`],
          }}>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            Code of Conduct
          </TypographyComponent>
          <TypographyComponent variant="subtitle2" style={{ marginBottom: '-32px' }}>
            Our serves as a guide to help all of us and the technical communities in which we engage
            grow.
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            <ul style={{ margin: 0 }}>
              <li>
                <ATagComponent href="https://github.com/ConduitPlatform/Conduit/blob/master/.github/CODE_OF_CONDUCT.md">
                  Conduit
                </ATagComponent>
              </li>
              <li>
                <ATagComponent href="https://github.com/ConduitPlatform/Conduit-UI/blob/master/.github/CODE_OF_CONDUCT.md">
                  Conduit-UI
                </ATagComponent>
              </li>
            </ul>
          </TypographyComponent>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            Contribute Code
          </TypographyComponent>
          <TypographyComponent variant="subtitle2" style={{ marginBottom: '-32px' }}>
            There are guidelines for contributing, just as there are for every project. Please read
            the contributing guide to ensure that we are able to assist you or approve your pull
            request as soon as possible.
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            <ul style={{ margin: 0 }}>
              <li>
                <ATagComponent href="https://github.com/ConduitPlatform/Conduit/blob/master/.github/CODE_OF_CONDUCT.md">
                  Conduit
                </ATagComponent>
              </li>
              <li>
                <ATagComponent href="https://github.com/ConduitPlatform/Conduit-UI/blob/master/.github/CODE_OF_CONDUCT.md">
                  Conduit-UI
                </ATagComponent>
              </li>
            </ul>
          </TypographyComponent>
          <TypographyComponent variant="h5" style={{ marginBottom: '-24px' }}>
            Join us on social platforms!
          </TypographyComponent>
          <TypographyComponent variant="subtitle2">
            <ul style={{ margin: 0 }}>
              <li>Matrix</li>
              <li>Discord</li>
            </ul>
          </TypographyComponent>
        </Box>
      </ContributePaperComponent>
    </Container>
  );
}
