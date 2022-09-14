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
      PaperProps={{
        elevation: 10,
        sx: { background: theme.palette.background.paper, borderRadius: '24px' },
      }}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <DialogContent>
        <DownloadContainer />
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
