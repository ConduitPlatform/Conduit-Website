import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { AppBar, Grid, Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import theme from '../../theme';
import CustomHeaderLink from '../custom/CustomHeaderLink';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(3, 4),
}));

const styles = {
  headerLayout: {
    margin: 'auto',
    gap: 2,
    maxWidth: 'xl',
  },
  lgMenu: {
    display: ['none', 'none', 'block'],
  },
  xsMenu: {
    display: ['block', 'block', 'none'],
    marginLeft: 'auto',
  },
};

const Header: FC = () => {
  const [drawer, setDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (matches) {
      setDrawer(false);
    }
  }, [matches]);

  return (
    <>
      <CustomAppBar elevation={0} position={'sticky'} color={'inherit'}>
        <Box>
          <Grid
            sx={styles.headerLayout}
            container
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Box display="flex" alignItems={'center'} columnGap={4}>
              <Typography variant={'h6'} color={'primary'}>
                <strong>CONDUIT LOGO</strong>
              </Typography>
              <Box sx={styles.lgMenu}>
                <CustomHeaderLink NextLinkProps={{ href: '/' }}>Home</CustomHeaderLink>
              </Box>
              <Box sx={styles.lgMenu}>
                <CustomHeaderLink NextLinkProps={{ href: '/docs' }}>Docs</CustomHeaderLink>
              </Box>
            </Box>
            <Box display="flex" alignItems={'center'} columnGap={4}>
              <Box sx={styles.lgMenu}>
                <a href="https://github.com/Quintessential-SFT/Conduit-Website">
                  <img
                    alt="GitHub Repo stars"
                    src="https://img.shields.io/github/stars/Quintessential-SFT/Conduit-Website?color=%235B44F2&logoColor=%235B44F2&style=social"
                  />
                </a>
              </Box>
              <Box sx={styles.lgMenu}>
                <CustomHeaderLink
                  variantActive={'outlined'}
                  variantInactive={'contained'}
                  NextLinkProps={{ href: '/get-started' }}>
                  GET STARTED
                </CustomHeaderLink>
              </Box>
            </Box>
            <Box sx={styles.xsMenu}>
              <IconButton onClick={() => setDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Box>
      </CustomAppBar>

      <CustomMenuDrawer open={drawer} onClose={() => setDrawer(false)}>
        <Box display={'grid'} alignItems={'center'} justifyContent={'center'} gap={3} padding={4}>
          <Typography align={'center'} color={'secondary'} variant={'h6'}>
            <strong> CONDUIT</strong>
          </Typography>
          <Box margin={'auto'}>
            <CustomHeaderLink NextLinkProps={{ href: '/' }}>Home</CustomHeaderLink>
          </Box>

          <Box margin={'auto'}>
            <CustomHeaderLink NextLinkProps={{ href: '/docs' }}>Docs</CustomHeaderLink>
          </Box>
          <Box margin={'auto'}>
            <CustomHeaderLink
              variantActive={'outlined'}
              variantInactive={'contained'}
              NextLinkProps={{ href: '/get-started' }}>
              GET STARTED
            </CustomHeaderLink>
          </Box>

          <Box margin={'auto'}>
            <a
              href="https://github.com/Quintessential-SFT/conduit"
              target={'_blank'}
              rel="noreferrer">
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/Quintessential-SFT/conduit?color=%235B44F2&logoColor=%235B44F2&style=social"
              />
            </a>
          </Box>
        </Box>
      </CustomMenuDrawer>
    </>
  );
};

export default Header;
