import { styled } from '@mui/material/styles';
import { Drawer, DrawerProps } from '@mui/material';
import theme from '../../theme';
import * as React from 'react';

const CustomMenuDrawer = styled((props: DrawerProps) => (
  <Drawer variant={'temporary'} anchor={'right'} {...props} />
))(() => ({
  '& .MuiDrawer-paper': {
    width: '80%',
    maxWidth: 500,
    background: theme.palette.background.paper,
  },
}));

export default CustomMenuDrawer;
