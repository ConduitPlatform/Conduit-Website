import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import AboutCard from './AboutCard';
import { ReactElement } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const Heading = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const styles = {
  cardLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '150px',
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
  icon: ReactElement;
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
    <Container maxWidth={'lg'} sx={{ py: [2, 4, 8] }}>
      <Link href={'/'} passHref>
        <Button color={'inherit'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>

      <Grid container mt={1} spacing={6}>
        <Grid item sm={7}>
          <Grid item xs={12}>
            <Heading variant="h4">{moduleName}</Heading>
          </Grid>
          <Typography mt={4}>{title}</Typography>
          <Box mt={4}>
            <a href={docsLink} style={{ textDecoration: 'none' }}>
              <Button
                color={'secondary'}
                endIcon={<MenuBookIcon sx={{ mb: 0.5 }} color={'secondary'} />}
                variant={'outlined'}>
                View the docs
              </Button>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
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
