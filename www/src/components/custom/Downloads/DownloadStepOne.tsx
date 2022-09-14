import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import OSCard from './OsCard';
import AppleLogo from '../../../../public/icons/appleLogo.svg';
import WindowsLogo from '../../../../public/icons/windowsLogo.svg';
import LinuxLogo from '../../../../public/icons/linux-tux.svg';

interface Props {
  os: 'MAC OS' | 'Linux' | 'Windows' | '';
  setOs: (os: 'MAC OS' | 'Linux' | 'Windows' | '') => void;
  setCurrentStep: (currentStep: number) => void;
  osVersion: '32bit' | '64bit' | 'amd64' | 'arm64' | '';
  setOsVersion: (osVersion: '32bit' | '64bit' | 'amd64' | 'arm64' | '') => void;
}

const DownloadStepOne: FC<Props> = ({ os, setOs, setCurrentStep, osVersion, setOsVersion }) => {
  const handleChangeOs = (os: 'MAC OS' | 'Linux' | 'Windows' | '') => {
    setOs(os);
    setOsVersion('');
  };

  const handleChangeOsVersion = (osVersion: '32bit' | '64bit' | 'amd64' | 'arm64' | '') => {
    setOsVersion(osVersion);
    setCurrentStep(1);
  };

  return (
    <Box py={2} display="flex" flexDirection="column" gap={4}>
      <Box display="flex" flexDirection="row" gap={2} justifyContent="space-around">
        <OSCard
          title="Windows"
          checked={os === 'Windows'}
          img={<WindowsLogo />}
          handleChecked={() => handleChangeOs('Windows')}
        />
        <OSCard
          title="Linux"
          checked={os === 'Linux'}
          img={<LinuxLogo />}
          handleChecked={() => handleChangeOs('Linux')}
        />
        <OSCard
          title="MAC OS"
          checked={os === 'MAC OS'}
          img={<AppleLogo />}
          handleChecked={() => handleChangeOs('MAC OS')}
        />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
        {os !== '' && os === 'Windows' && (
          <>
            <Typography>OS Version</Typography>
            <Box display="flex" gap={2}>
              <Button
                color="secondary"
                variant={osVersion === '32bit' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('32bit')}>
                32bit
              </Button>
              <Button
                color="secondary"
                variant={osVersion === '64bit' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('64bit')}>
                64bit
              </Button>
            </Box>
          </>
        )}
        {os !== '' && os !== 'Windows' && (
          <>
            <Typography>OS Version</Typography>
            <Box display="flex" gap={2}>
              <Button
                color="secondary"
                variant={osVersion === 'amd64' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('amd64')}>
                AMD64
              </Button>
              <Button
                color="secondary"
                variant={osVersion === 'arm64' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('arm64')}>
                ARM64
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
