import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import OSCard from './OsCard';
import AppleLogo from '../../../../public/icons/appleLogo.svg';
import WindowsLogo from '../../../../public/icons/windowsLogo.svg';

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
        checked={os === 'windows'}
        img={<WindowsLogo />}
        handleChecked={() => setOs('windows')}
      />
      <OSCard
        title="Linux"
        checked={os === 'linux'}
        img={''}
        handleChecked={() => setOs('linux')}
      />
      <OSCard
        title="MAC OS"
        checked={os === 'mac'}
        img={<AppleLogo />}
        handleChecked={() => setOs('mac')}
      />
      <Box pt={1}>
        <Button variant="contained" color="secondary" onClick={() => setCurrentStep(1)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
