import * as React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

interface ModulePageProps {
  moduleName: string;
  title?: string;
  introText?: string;
  features?: string[];
  bannerImages?: any;
  docsLink: string;
}
const ModulePage: React.FC<ModulePageProps> = ({ moduleName, title, bannerImages, docsLink }) => {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [2, 4, 8] }}>
      <Heading textAlign="center" variant="h4" paddingTop="25px">
        {moduleName}
      </Heading>
      <Link href={'/'} passHref>
        <Button sx={{ marginLeft: [0, 0, 0, 6] }} color={'inherit'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>
      <Grid container>
        <Grid item sm={5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography>{title}</Typography>
          <a href={docsLink} style={{ textDecoration: 'none' }}>
            <Button>View the docs</Button>
          </a>
        </Grid>
        <Grid item sm={7}>
          {bannerImages}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ModulePage;
