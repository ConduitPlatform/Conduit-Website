import { styled } from '@mui/material/styles';
import React from 'react';
import { Divider, DividerProps, Typography } from '@mui/material';

const CustomDivider = styled(({ children, ...props }: DividerProps) => (
  <Divider {...props}>
    {children && (
      <Typography>
        <strong>{children}</strong>
      </Typography>
    )}
  </Divider>
))((theme) => ({
  marginTop: theme.theme.spacing(20),
  marginBottom: theme.theme.spacing(10),

  [theme.theme.breakpoints.down('md')]: {
    marginTop: theme.theme.spacing(16),
    marginBottom: theme.theme.spacing(8),
  },
  [theme.theme.breakpoints.down('sm')]: {
    marginTop: theme.theme.spacing(12),
    marginBottom: theme.theme.spacing(6),
  },
}));

export default CustomDivider;
