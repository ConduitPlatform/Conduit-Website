import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import ModuleFeatureCard from './ModuleFeatureCard';

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

interface Feature {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactComponentElement<any>;
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
        <Button color={'inherit'} startIcon={<ArrowBack />}>
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
      </Grid>
      <Box my={4} display={'grid'} gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))" gap={2}>
        {features.map((feature, i) => {
          return (
            <ModuleFeatureCard
              key={i}
              title={feature.title}
              icon={feature.icon}
              url={feature.url}
              description={feature.description}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default ModulePage;
