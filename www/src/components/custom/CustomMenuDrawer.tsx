import { styled } from '@mui/material/styles';
import { Box, Divider, Drawer, DrawerProps, IconButton, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import CustomHeaderLink from './CustomHeaderLink';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';

const CustomDrawer = styled((props: DrawerProps) => (
  <Drawer
    ModalProps={{
      keepMounted: true,
    }}
    variant={'temporary'}
    anchor={'right'}
    {...props}
  />
))((theme) => ({
  '& .MuiDrawer-paper': {
    width: '80%',
    maxWidth: 500,
    background: theme.theme.palette.background.paper,
  },
}));

const CustomMenuDrawer: FC<DrawerProps> = ({ ...props }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <CustomDrawer {...props}>
      <Box padding={3}>
        <Typography align={'center'} variant={'h6'} gutterBottom>
          <strong>CONDUIT</strong>
        </Typography>
        <Divider />
        <Box mt={3} display={'grid'} alignItems={'center'} justifyContent={'center'} gap={4}>
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
          <Box margin={'auto'}>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default CustomMenuDrawer;
