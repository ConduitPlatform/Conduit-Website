import * as React from 'react';
import { FC } from 'react';
import { Box, IconButton, Theme } from '@mui/material';
import Instagram from '../../../public/social/instagram.svg';
import Github from '../../../public/social/github-colored.svg';
import Medium from '../../../public/social/medium.svg';
import Facebook from '../../../public/social/facebook.svg';

const styles = {
  container: {
    boxShadow: '2px 5px 5px 1px rgb(0,0,0,.01)',
    background: 'white',
    padding: (theme: Theme) => theme.spacing(0.5, 1),
    borderRadius: 4,
  },
};

const ContactLinks: FC = () => {
  return (
    <Box display={'flex'} sx={styles.container} gap={1}>
      <IconButton
        component={'a'}
        href="https://www.facebook.com/quintessentialSFT/"
        target="_blank"
        id="quint-footer-icon-2"
        rel="noreferrer">
        <Facebook />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://www.instagram.com/quintessentialsft/"
        target="_blank"
        id="quint-footer-icon-3"
        rel="noreferrer">
        <Instagram />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://medium.com/quintessential-sft/"
        target="_blank"
        id="quint-footer-icon-4"
        rel="noreferrer">
        <Medium />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://github.com/Quintessential-SFT/"
        target="_blank"
        id="quint-footer-icon-5"
        rel="noreferrer">
        <Github />
      </IconButton>
    </Box>
  );
};

export default ContactLinks;
