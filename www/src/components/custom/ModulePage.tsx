import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

const CustomDescriptionBox = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  padding: '10px',
}));

interface Feature {
  name: string;
  description: string;
  caption: string;
  img?: React.ReactComponentElement<any>;
}

interface ModulePageProps {
  moduleName: string;
  title?: string;
  img: React.ReactComponentElement<any>;
  introText?: string;
  features: Feature[];
  docsLink: string;
}
const ModulePage: React.FC<ModulePageProps> = ({ moduleName, title, docsLink, img, features }) => {
  return (
    <Container maxWidth={'lg'} sx={{ pt: [2, 4, 8] }}>
      <Heading textAlign="center" variant="h4" paddingTop="25px">
        {moduleName}
      </Heading>
      <Link href={'/'} passHref>
        <Button sx={{ marginLeft: [0, 0, 0, 6] }} color={'inherit'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>
      <Grid container spacing={6} sx={{ pt: '40px' }}>
        <Grid item sm={7} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography>{title}</Typography>
          <a href={docsLink} style={{ textDecoration: 'none' }}>
            <Button>View the docs</Button>
          </a>
        </Grid>
        <Grid item sm={5}>
          {img}
        </Grid>
        {features.map((feature) => {
          return (
            <Grid
              key={feature.name}
              item
              sx={{ alignItems: 'center', justifyContent: 'center' }}
              sm={4}>
              <CustomDescriptionBox>
                <ul>
                  <li>
                    <Typography>{feature.name}</Typography>
                  </li>
                  <li>
                    <Typography>{feature.description}</Typography>
                  </li>
                  <li>
                    <Typography>{feature.caption}</Typography>
                  </li>
                </ul>
              </CustomDescriptionBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ModulePage;
