import React, { FC, useState } from 'react';
import { Box, Dialog, DialogContent, useTheme } from '@mui/material';
import PlatformSelection from './PlatformSelection';
import PlatformInstallation from './PlatformInstallation';
import { Platform } from './types';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DownloadDialog: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [platform, setPlatform] = useState<Platform>(Platform.UNKNOWN);
  const theme = useTheme();

  return (
    <Dialog
      PaperProps={{
        elevation: 0,
        sx: { background: theme.palette.background.paper, borderRadius: '24px' },
      }}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <DialogContent>
        <Box py={2} display="flex" flexDirection="column" gap={4}>
          <PlatformSelection platform={platform} setPlatform={setPlatform} />
          <PlatformInstallation platform={platform} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
