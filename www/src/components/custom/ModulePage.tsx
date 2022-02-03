import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import AboutCard from './AboutCard';
import { ReactElement } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from '../../Link';
const Heading = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const styles = {
  cardLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '100px',
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
        <Button color={'secondary'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>

      <Box
        mt={[4, 6]}
        display={'grid'}
        gap={4}
        gridTemplateColumns={'repeat(auto-fit,minmax(320px,1fr))'}>
        <Box>
          <Heading variant="h5">{moduleName}</Heading>
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
        </Box>
        <Box
          sx={{
            aspectRatio: '16/10',
            my: 'auto',
            textAlign: 'center',
          }}>
          {img}
        </Box>
      </Box>
      <Box sx={styles.cardLayout}>
        {features.map((feature, i) => {
          return (
            <Box component={Link} href={feature.url}>
              <AboutCard
                cursor={'pointer'}
                title={feature.title}
                text={feature.description}
                icon={feature.icon}
              />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ModulePage;
