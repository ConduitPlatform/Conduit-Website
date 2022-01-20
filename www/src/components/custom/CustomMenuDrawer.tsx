import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Drawer, DrawerProps, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import HeaderLinkButton from './HeaderLinkButton';
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from './CustomSwitch';
import DropdownMenu from './DropdownMenu';
import Link from '../../Link';
import { navigationLinks } from '../../fixedData/navigationLinks';

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
        <Button fullWidth color={'inherit'} href={'/'} component={Link}>
          <Typography variant={'h6'}>
            <strong>CONDUIT LOGO</strong>
          </Typography>
        </Button>
        <Divider />
        <Box mt={3} display={'grid'} alignItems={'center'} justifyContent={'center'} gap={4}>
          {navigationLinks.map((item) => (
            <Box key={item.title} margin={'auto'}>
              <HeaderLinkButton ButtonProps={{ href: item.href, color: 'inherit' }}>
                {item.title}
              </HeaderLinkButton>
            </Box>
          ))}
          <Box margin={'auto'}>
            <DropdownMenu />
          </Box>
          <Box margin={'auto'}>
            <HeaderLinkButton
              variantActive={'outlined'}
              variantInactive={'contained'}
              ButtonProps={{ href: '/docs' }}>
              GET STARTED
            </HeaderLinkButton>
          </Box>
          <Box margin={'auto'}>
            <a
              href="https://github.com/Quintessential-SFT/conduit"
              target={'_blank'}
              rel="noreferrer">
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/Quintessential-SFT
                /conduit?color=%235B44F2&logoColor=%235B44F2&style=social"
              />
            </a>
          </Box>
          <Box margin={'auto'}>
            <CustomSwitch
              checked={theme.palette.mode === 'dark'}
              onClick={colorMode.toggleColorMode}
            />
          </Box>
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default CustomMenuDrawer;
