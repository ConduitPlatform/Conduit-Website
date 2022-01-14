import * as React from 'react';
import { FC, useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Theme,
  useTheme,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import CustomHeaderLink from '../custom/CustomHeaderLink';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../../pages/_app';
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

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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
              <Button disableRipple color={'success'}>
                <Typography variant={'h6'}>
                  <strong>CONDUIT LOGO</strong>
                </Typography>
              </Button>

              <Box sx={styles.lgMenu}>
                <CustomHeaderLink ButtonProps={{ color: 'success' }} NextLinkProps={{ href: '/' }}>
                  Home
                </CustomHeaderLink>
              </Box>
              <Box sx={styles.lgMenu}>
                <CustomHeaderLink
                  ButtonProps={{ color: 'success' }}
                  NextLinkProps={{ href: '/docs' }}>
                  Docs
                </CustomHeaderLink>
              </Box>
            </Box>

            <Box display="flex" alignItems={'center'} columnGap={4}>
              <IconButton sx={styles.lgMenu} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
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
                  NextLinkProps={{ href: '/get-started' }}
                  ButtonProps={{ color: 'success' }}>
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
      <CustomMenuDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
};

export default Header;
