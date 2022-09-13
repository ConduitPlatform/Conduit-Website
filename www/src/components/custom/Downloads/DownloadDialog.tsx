import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import DownloadContainer from './DownloadContainer';

import { Close } from '@mui/icons-material';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadDialog: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={() => setIsOpen(false)}>
      <IconButton
        onClick={() => setIsOpen(false)}
        sx={{ position: 'absolute', right: 15, top: 15 }}
        disableRipple>
        <Close />
      </IconButton>
      <DialogTitle>Download</DialogTitle>
      <DialogContent>
        <DownloadContainer />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
