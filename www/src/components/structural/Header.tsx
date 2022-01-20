import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Theme,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import HeaderLinkButton from '../custom/HeaderLinkButton';
import DropdownMenu from '../custom/DropdownMenu';
import Link from '../../Link';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(3, 4),
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
            <Box display="flex" alignItems={'center'} columnGap={5}>
              <Button color={'inherit'} href={'/'} component={Link}>
                <Typography variant={'h6'}>
                  <strong>CONDUIT LOGO</strong>
                </Typography>
              </Button>
              <Box sx={styles.lgMenu}>
                <HeaderLinkButton ButtonProps={{ href: '/docs', color: 'inherit' }}>
                  Docs
                </HeaderLinkButton>
              </Box>
              <Box sx={styles.lgMenu}>
                <HeaderLinkButton ButtonProps={{ href: '/blog', color: 'inherit' }}>
                  Blog
                </HeaderLinkButton>
              </Box>
              <Box sx={styles.lgMenu}>
                <DropdownMenu />
              </Box>
            </Box>

            <Box display="flex" alignItems={'center'} columnGap={4}>
              <Box sx={styles.lgMenu} mt={1}>
                <a href="https://github.com/Quintessential-SFT/conduit">
                  <img
                    alt="GitHub Repo stars"
                    src="https://img.shields.io/github/stars/Quintessential-SFT/conduit?logoColor=%2307D9C4&style=social"
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
