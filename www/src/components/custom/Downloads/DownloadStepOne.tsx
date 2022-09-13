import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import OSCard from './OsCard';
import AppleLogo from '../../../../public/icons/appleLogo.svg';
import WindowsLogo from '../../../../public/icons/windowsLogo.svg';
import LinuxLogo from '../../../../public/icons/linux-tux.svg';

interface Props {
  os: any;
  setOs: any;
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepOne: FC<Props> = ({ os, setOs, setCurrentStep }) => {
  return (
    <Box py={2} pb={4} display="flex" flexDirection="column" gap={2}>
      <OSCard
        title="Windows"
        checked={os === 'Windows'}
        img={<WindowsLogo />}
        handleChecked={() => setOs('Windows')}
      />
      <OSCard
        title="Linux"
        checked={os === 'Linux'}
        img={<LinuxLogo />}
        handleChecked={() => setOs('Linux')}
      />
      <OSCard
        title="MAC OS"
        checked={os === 'MAC OS'}
        img={<AppleLogo />}
        handleChecked={() => setOs('MAC OS')}
      />
      <Box pt={1}>
        <Button
          disabled={os === ''}
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(1)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
