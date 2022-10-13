import React, { FC, ReactNode } from 'react';
import { Avatar, Box, Chip, Container, IconButton, Typography, useTheme } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface Props {
  title: string;
  index: number;
  subtitle?: string;
  skipped?: boolean;
  handleEdit?: () => void;
  highlighted: boolean;
  children?: ReactNode;
}

const DownloadStep: FC<Props> = ({
  title,
  index,
  handleEdit,
  highlighted,
  subtitle,
  children,
  skipped,
}) => {
  const theme = useTheme();

  const extractBackgoundColor = () => {
    if (skipped) {
      return theme.palette.error.main;
    } else if (highlighted) {
      return theme.palette.secondary.main;
    } else return '#F7F7F8';
  };

  return (
    <>
      <Box py="14px" display="flex">
        <Box
          sx={{ backgroundColor: extractBackgoundColor() }}
          height={'52px'}
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
                border: `3px solid ${theme.palette.mode === 'dark' ? 'black' : 'white'}`,
              }}>
              {index}
            </Avatar>
            <Box display="flex" gap={3} flexDirection={'row'} alignItems="center">
              <Typography
                variant={'body1'}
                color={
                  theme.palette.mode === 'light' && highlighted ? 'common.white' : 'common.black'
                }>
                {title}
              </Typography>
              {subtitle && (
                <Chip
                  sx={{ backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black' }}
                  label={subtitle}
                />
              )}
            </Box>
          </Box>
          {handleEdit && !skipped && (
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
