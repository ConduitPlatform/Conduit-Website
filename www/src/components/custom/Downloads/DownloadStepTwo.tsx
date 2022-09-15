import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';

const downloadURL =
  'https://github.com/ConduitPlatform/CLI/releases/download/v0.0.9/conduit-v0.0.9-6767589-';

interface Props {
  os: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '';
  osVersion: '32bit' | '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '';
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepTwo: FC<Props> = ({ os, osVersion, setCurrentStep }) => {
  const [download, setDownload] = useState(false);
  const extractURL = () => {
    if (os === 'Windows') {
      if (osVersion === '32bit') {
        return `${downloadURL}win32-x86.tar.gz`;
      } else return `${downloadURL}win32-x64.tar.gz`;
    } else if (os === 'Linux') {
      if (osVersion === 'amd64') {
        return `${downloadURL}linux-x64.tar.gz`;
      } else return `${downloadURL}linux-arm.tar.gz`;
    } else {
      if (osVersion === 'appleSilicon') {
        return `${downloadURL}darwin-arm64.tar.gz`;
      } else return `${downloadURL}darwin-x64.tar.gz`;
    }
  };

  useEffect(() => {
    if (download)
      setTimeout(() => {
        setDownload(false);
      }, 10000);
  }, [download]);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={3}
        justifyContent="center"
        p={2}>
        <Typography>Download package</Typography>
        <a style={{ textDecoration: 'none' }} href={extractURL()} download>
          <Button
            color="secondary"
            endIcon={<Download />}
            onClick={() => setDownload(true)}
            variant="outlined">
            Download
          </Button>
        </a>
        {download && <Typography>Your download will begin shortly!</Typography>}
        <Box width="100%" borderBottom={'1px solid white'} />
        <Typography>Install</Typography>
        <Typography color="error">*Install command pending</Typography>
        <Typography textAlign="center" color="secondary">
          *Path has to be addded to env vars until native Conduit packages arrive
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => setCurrentStep(2)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepTwo;
