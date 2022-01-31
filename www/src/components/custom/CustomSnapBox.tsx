import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

type ExtraProps = {
  gridColumnLength: number;
};

const CustomSnapBox = styled((props: BoxProps & ExtraProps) => <Box {...props} />)(
  ({ theme, gridColumnLength }) => ({
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(375px, 1fr))',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: `repeat(${gridColumnLength}, minmax(320px, 450px))`,
    },

    scrollSnapType: 'x mandatory',
    '&::-webkit-scrollbar': {
      height: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      bgcolor: 'background.paper',
      border: `1px solid ${theme.palette.secondary.dark}`,
      borderRadius: 8,
    },
    '&>*': {
      scrollSnapAlign: 'center',
    },
  })
);

export default CustomSnapBox;
