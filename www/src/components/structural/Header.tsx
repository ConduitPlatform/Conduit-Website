import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { AppBar, Grid, Box, IconButton, Typography, useMediaQuery, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import HeaderLinkButton from '../custom/HeaderLinkButton';

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
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

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
              <Typography variant={'h6'}>
                <strong>CONDUIT LOGO</strong>
              </Typography>

              <Box sx={styles.lgMenu}>
                <HeaderLinkButton ButtonProps={{ href: '/' }}>Home</HeaderLinkButton>
              </Box>
              <Box sx={styles.lgMenu}>
                <HeaderLinkButton ButtonProps={{ href: '/docs' }}>Docs</HeaderLinkButton>
              </Box>
            </Box>

            <Box display="flex" alignItems={'center'} columnGap={4}>
              <Box sx={styles.lgMenu} mt={1}>
                <a href="https://github.com/Quintessential-SFT/Conduit-Website">
                  <img
                    alt="GitHub Repo stars"
                    src="https://img.shields.io/github/stars/Quintessential-SFT/Conduit-Website?color=%235B44F2&logoColor=%235B44F2&style=social"
                  />
                </a>
              </Box>
              <Box sx={styles.lgMenu}>
                <HeaderLinkButton
                  variantActive={'outlined'}
                  variantInactive={'contained'}
                  ButtonProps={{ href: '/get-started' }}>
                  GET STARTED
                </HeaderLinkButton>
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
      <CustomMenuDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
};

export default Header;
