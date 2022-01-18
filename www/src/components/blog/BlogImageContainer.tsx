import React, { FC } from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

type BlogImageContainerProps = {
  src: string;
  subTitle?: string;
};

const BlogImageContainer: FC<BlogImageContainerProps & BoxProps> = ({
  src,
  subTitle,
  ...props
}) => {
  return (
    <Box margin={'auto'} {...props}>
      <img src={src} width={'100%'} height={'100%'} alt={'img-cont'} />
      <Typography variant="subtitle2" align={'center'}>
        {subTitle}
      </Typography>
    </Box>
  );
};
export default BlogImageContainer;
