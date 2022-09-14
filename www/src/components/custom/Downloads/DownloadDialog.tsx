import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper, useTheme } from '@mui/material';
import DownloadContainer from './DownloadContainer';

import { Close } from '@mui/icons-material';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadDialog: FC<Props> = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  return (
    <Dialog
      PaperProps={{ elevation: 10, sx: { background: theme.palette.background.default } }}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={() => setIsOpen(false)}>
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
