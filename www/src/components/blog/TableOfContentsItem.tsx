import React, { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  topic: string;
  children: ReactNode;
}

const TableOfContentsItem: FC<Props> = ({ topic, children }) => {
  return (
    <section id={topic.toLowerCase()} className="section-heading">
      <Typography variant={'h5'} gutterBottom>
        <strong>{topic}</strong>
      </Typography>
      <Box>{children}</Box>
    </section>
  );
};

export default TableOfContentsItem;
