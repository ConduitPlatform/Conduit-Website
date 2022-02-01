import React, { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';

const CustomMenuItem: FC = ({ children }) => {
  return <MenuItem>{children}</MenuItem>;
};
export default CustomMenuItem;
