import React, { FC, ReactNode } from 'react';
import { Avatar, Box, Container, IconButton, Typography, useTheme } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface Props {
  title: string;
  index: number;
  subtitle?: string;
  handleEdit?: () => void;
  highlighted: boolean;
  children?: ReactNode;
}

const DownloadStep: FC<Props> = ({ title, index, handleEdit, highlighted, subtitle, children }) => {
  const theme = useTheme();
  return (
    <>
      <Box py="14px" display="flex">
        <Box
          sx={{ backgroundColor: highlighted ? theme.palette.secondary.main : '#F7F7F8' }}
          height={'72px'}
          width="100%"
          borderRadius="16px"
          display="flex"
          justifyContent="space-between"
          alignItems={'center'}
          px={2}>
          <Box display="flex" alignItems="center" gap={3}>
            <Avatar
              sx={{
                backgroundColor: highlighted
                  ? theme.palette.mode === 'dark'
                    ? 'white'
                    : 'black'
                  : '#838B98',
              }}>
              {index}
            </Avatar>
            <Box display="flex" gap={3} flexDirection={'row'}>
              <Typography
                variant={'body1'}
                color={
                  theme.palette.mode === 'light' && highlighted ? 'common.white' : 'common.black'
                }>
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  color={
                    theme.palette.mode === 'light' && highlighted ? 'common.white' : 'common.black'
                  }>
                  {subtitle}
                </Typography>
              )}
            </Box>
          </Box>
          {handleEdit && (
            <IconButton disableRipple onClick={() => handleEdit()}>
              <Edit />
            </IconButton>
          )}
        </Box>
      </Box>

      <Container maxWidth="md">{children}</Container>
    </>
  );
};

export default DownloadStep;
