import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(180deg, ${theme.palette.primary.light} 20%, ${theme.palette.secondary.light} 60%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const CustomLogo: FC = () => {
  return (
    <CustomTypography variant={'h5'}>
      <strong>{'</>'}</strong>
      <strong>CONDUIT</strong>
    </CustomTypography>
  );
};
export default CustomLogo;
