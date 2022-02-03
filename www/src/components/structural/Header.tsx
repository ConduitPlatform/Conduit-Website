import * as React from 'react';
import { FC, useContext, useEffect, useState } from 'react';
import { AppBar, Grid, Box, IconButton, useMediaQuery, Theme, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import HeaderLinkButton from '../custom/HeaderLinkButton';
import Link from '../../Link';
import { navigationLinks } from '../../utils/navigationLinks';
import ConduitLogo from '../../../public/conduitLogo.svg';
import CustomModuleMenu from '../custom/CustomModuleMenu';
import CustomSwitch from '../custom/CustomSwitch';
import { ColorModeContext } from '../../../pages/_app';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2.5, 4),
  top: -1,
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

  const headerNavigation = () => {
    return navigationLinks.map((item) => {
      switch (item.title.toLowerCase()) {
        case 'modules':
          return (
            <Box key={item.title} sx={styles.lgMenu}>
              <CustomModuleMenu />
            </Box>
          );
        default:
          return (
            <Box key={item.title} sx={styles.lgMenu}>
              <HeaderLinkButton
                ButtonProps={{ href: item?.href, color: 'inherit', variant: 'text' }}>
                {item.title}
              </HeaderLinkButton>
            </Box>
          );
      }
    });
  };

  return (
    <>
      <CustomAppBar elevation={0} position={'sticky'} color={'inherit'}>
        <Box>
          <Grid
            sx={styles.headerLayout}
            container
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Box display="flex" alignItems={'center'} columnGap={2}>
              <Grid container href={'/'} component={Link}>
                <ConduitLogo />
              </Grid>
              {headerNavigation()}
            </Box>

            <Box display="flex" alignItems={'center'} columnGap={2}>
              <Box sx={styles.lgMenu} mt={1}>
                <CustomSwitch
                  checked={theme.palette.mode === 'dark'}
                  onClick={colorMode.toggleColorMode}
                />
              </Box>
              <Box sx={styles.lgMenu} mt={1}>
                <a href="https://github.com/ConduitPlatform/Conduit">
                  <img
                    alt="GitHub Repo stars"
                    src="https://img.shields.io/github/stars/ConduitPlatform/Conduit?style=social"
                  />
                </a>
              </Box>
              <Box sx={styles.lgMenu}>
                <HeaderLinkButton
                  variantActive={'outlined'}
                  variantInactive={'contained'}
                  ButtonProps={{ href: '/docs', color: 'secondary' }}>
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
