import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { AppBar, Grid, Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomMenuDrawer from '../custom/CustomMenuDrawer';
import theme from '../../theme';

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
  mdMenu: {
    display: ['none', 'block', 'block'],
  },
  xsMenu: {
    display: ['block', 'block', 'none'],
    marginLeft: 'auto',
  },
  xsDrawerMenu: {
    display: [null, 'none', 'none'],
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
              <Button variant={'outlined'} color={'info'}>
                CONDUIT LOGO
              </Button>
              <Button sx={styles.lgMenu} color={'secondary'} href={'/'}>
                Home
              </Button>
              <Button sx={styles.mdMenu} href={'/docs'}>
                Docs
              </Button>
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
              <Button sx={styles.lgMenu} variant={'contained'} color={'info'}>
                GET STARTED
              </Button>
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
        <Box display={'grid'} alignItems={'center'} gap={3} padding={4}>
          <Typography align={'center'} color={'secondary'} variant={'h6'}>
            <strong> CONDUIT</strong>
          </Typography>
          <Button variant={'contained'} color={'info'}>
            GET STARTED
          </Button>

          <Button color={'secondary'} href={'/'}>
            Home
          </Button>
          <Button sx={styles.xsDrawerMenu} href={'/docs'}>
            Docs
          </Button>
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
