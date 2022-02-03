import { styled } from '@mui/material/styles';
import { Box, Drawer, DrawerProps, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import HeaderLinkButton from './HeaderLinkButton';
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from './CustomSwitch';
import { navigationLinks } from '../../utils/navigationLinks';
import Link from '../../Link';
import ConduitLogo from '../../../public/conduitLogo.svg';
import ModuleAccordion from './ModuleAccordion';

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

  const onButtonClick = () => (props?.onClose ? props.onClose({}, 'backdropClick') : undefined);

  const menuNavigation = () => {
    return navigationLinks.map((item) => {
      switch (item.title.toLowerCase()) {
        case 'modules':
          return (
            <Box key={item.title} margin={'auto'}>
              <ModuleAccordion isDrawerOpen={props.open} onClose={onButtonClick} />
            </Box>
          );
        default:
          return (
            <Box key={item.title} margin={'auto'}>
              <HeaderLinkButton
                ButtonProps={{
                  onClick: onButtonClick,
                  href: item?.href,
                  color: 'inherit',
                  variant: 'text',
                }}>
                <Typography>
                  <strong>{item.title}</strong>
                </Typography>
              </HeaderLinkButton>
            </Box>
          );
      }
    });
  };

  return (
    <CustomDrawer {...props}>
      <Box display={'grid'} alignItems={'center'} justifyContent={'center'}>
        <Box
          href={'/'}
          component={Link}
          mt={3}
          sx={{ cursor: 'pointer' }}
          mx={'auto'}
          onClick={onButtonClick}>
          <ConduitLogo />
        </Box>
        <Box mt={[8, 10]} display={'grid'} alignItems={'center'} gap={1}>
          {menuNavigation()}
          <Box margin={'auto'}>
            <HeaderLinkButton
              ButtonProps={{ onClick: onButtonClick, href: '/docs', color: 'inherit' }}>
              <Typography>
                <strong>GET STARTED</strong>
              </Typography>
            </HeaderLinkButton>
          </Box>
          <Box mt={4} mx={'auto'}>
            <a href="https://github.com/ConduitPlatform/Conduit">
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/ConduitPlatform/Conduit?style=social"
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
