import { FC, ReactComponentElement } from 'react';
import { Box, BoxProps, Divider, Theme, Typography } from '@mui/material';
import * as React from 'react';
import { SxObject } from '../../models/SxObjects';

type Props = {
  image: ReactComponentElement<any>;
  title: string;
  subText: string;
};

const styles: SxObject = {
  root: {
    padding: (theme: Theme) => theme.spacing(4, 2),
    cursor: 'pointer',
    borderRadius: 4,
    transition: '0.2s',
    '&:hover': {
      bgcolor: 'background.paper',
    },
  },
  iconSize: {
    '& > *': {
      maxHeight: 150,
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
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Typography align={'center'}>{subText}</Typography>
    </Box>
  );
};

export default ImageSectionCard;
