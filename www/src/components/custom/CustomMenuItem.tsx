import React, { FC, ReactComponentElement } from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Box, Grid, Typography } from '@mui/material';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  margin: '6px',
  padding: theme.spacing(2, 1),
  borderRadius: 8,
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  transition: '0.5s',
  '& .MuiMenuItem-root:hover': {
    boxShadow: '3px 3px 12px 1px rgba(0,0,0,0.1)',
  },
}));

interface CustomMenuItemProps {
  title: string;
  icon?: ReactComponentElement<any>;
  description?: string;
}

const CustomMenuItem: FC<CustomMenuItemProps> = ({ title, description, icon }) => {
  return (
    <StyledMenuItem>
      <Grid container>
        <Grid item sm={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {icon}
            <Typography>{title}</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} wrap="wrap">
          <Typography textOverflow={'wrap'} variant="caption">
            Create custom Schemas, Queries and leverage automatically-created CRUD operations.
          </Typography>
        </Grid>
      </Grid>
    </StyledMenuItem>
  );
};
export default CustomMenuItem;
