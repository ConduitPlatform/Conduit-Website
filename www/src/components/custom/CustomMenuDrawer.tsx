import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, DrawerProps, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import HeaderLinkButton from './HeaderLinkButton';
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from './CustomSwitch';
import { navigationLinks } from '../../fixedData/navigationLinks';
import Link from '../../Link';
import CustomLogo from './CustomLogo';
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

  return (
    <CustomDrawer {...props}>
      <Box display={'grid'} alignItems={'center'} justifyContent={'center'}>
        <Box mt={2}>
          <Button href={'/'} component={Link} color={'inherit'} onClick={onButtonClick}>
            <CustomLogo />
          </Button>
        </Box>
        <Box mt={[8, 10]} display={'grid'} alignItems={'center'} gap={3}>
          {navigationLinks.map((item) => (
            <Box key={item.title} margin={'auto'}>
              <HeaderLinkButton
                ButtonProps={{ onClick: onButtonClick, href: item.href, color: 'inherit' }}>
                <Typography>
                  <strong>{item.title}</strong>
                </Typography>
              </HeaderLinkButton>
            </Box>
          ))}
          <Box margin={'auto'}>
            <HeaderLinkButton
              ButtonProps={{ onClick: onButtonClick, href: '/docs', color: 'inherit' }}>
              <Typography>
                <strong>GET STARTED</strong>
              </Typography>
            </HeaderLinkButton>
          </Box>
          <Box margin={'auto'}>
            <ModuleAccordion />
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
