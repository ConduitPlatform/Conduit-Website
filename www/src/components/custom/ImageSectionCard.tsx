import { FC, ReactComponentElement } from 'react';
import { Box, BoxProps, Divider, IconButton, Theme, Typography } from '@mui/material';
import * as React from 'react';
import { SxObject } from '../../models/SxObjects';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
  image: ReactComponentElement<any>;
  title: string;
  subText: string;
};

const styles: SxObject = {
  root: {
    padding: (theme: Theme) => theme.spacing(4, 2, 1, 2),
    cursor: 'pointer',
    borderRadius: 4,
    transition: '0.5s',
    '&:hover': {
      '& svg': {
        animation: (theme: Theme) =>
          `myEffect 3000ms ${theme.transitions.easing.easeInOut} infinite`,
      },
      transform: 'scale(1.05)',
    },
    '@keyframes myEffect': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.3)',
      },
      '100%': {
        transform: ' scale(1)',
      },
    },
  },
  iconSize: {
    '& > *': {
      maxHeight: 100,
    },
  },

  dividerSpacing: { mt: 1, mb: 2 },
};

const ImageSectionCard: FC<Props & BoxProps> = ({ image, title, subText, ...props }) => {
  return (
    <Box sx={styles.root} {...props}>
      <Box display={'flex'} justifyContent={'center'} mb={4} sx={styles.iconSize}>
        {image}
      </Box>
      <Typography align={'center'} variant={'h5'}>
        <strong>{title}</strong>
      </Typography>
      <Divider variant={'middle'} sx={{ mt: 1, mb: 1 }} />
      <Typography align={'center'}>{subText}</Typography>
      <Box mt={1} display={'flex'} justifyContent={'center'}>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageSectionCard;
