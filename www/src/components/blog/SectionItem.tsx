import React, { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  topic: string;
  children: ReactNode;
}

const SectionItem: FC<Props> = ({ topic, children }) => {
  return (
    <section id={topic.toLowerCase()}>
      <Typography variant={'h5'} gutterBottom>
        <strong>{topic}</strong>
      </Typography>
      <Box>{children}</Box>
    </section>
  );
};

export default SectionItem;
