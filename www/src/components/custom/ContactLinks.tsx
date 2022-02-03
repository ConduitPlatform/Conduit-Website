import * as React from 'react';
import { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import Github from '../../../public/icons/github.svg';

const ContactLinks: FC = () => {
  return (
    <Box display={'flex'} gap={1}>
      <IconButton
        component={'a'}
        href="https://github.com/ConduitPlatform/"
        target="_blank"
        id="quint-footer-icon-5"
        rel="noreferrer">
        <Github />
      </IconButton>
    </Box>
  );
};

export default ContactLinks;
