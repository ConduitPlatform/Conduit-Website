import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import AboutCard from './AboutCard';

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

const styles = {
  cardLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    '& > *': {
      flex: '1 1 30%',
      minWidth: 320,
    },
  },
} as const;

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
      <Box sx={styles.cardLayout}>
        {features.map((feature, i) => {
          return (
            <Link key={i} href={feature.url} passHref>
              <AboutCard title={feature.title} text={feature.description} icon={feature.icon} />
            </Link>
          );
        })}
      </Box>
    </Container>
  );
};

export default ModulePage;
