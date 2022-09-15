import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface Props {
  configuration: 'configless' | 'configured' | '';
  setConfiguration: (configuration: 'configless' | 'configured' | '') => void;
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepThree: FC<Props> = ({ configuration, setConfiguration, setCurrentStep }) => {
  const handleConfiguration = (configuration: 'configless' | 'configured' | '') => {
    setConfiguration(configuration);
    setCurrentStep(3);
  };

  return (
    <Box display="flex" flexDirection="column" gap={3} alignItems="center">
      <Typography textAlign="center">
        The default Conduit installation includes the following modules: Core, Database,
        Authentication, Router
      </Typography>
      <Typography textAlign="center">Do you wish to bring up additional modules?</Typography>
      <Box display="flex" gap={3}>
        <Button
          onClick={() => handleConfiguration('configured')}
          color="secondary"
          variant={configuration === 'configured' ? 'contained' : 'outlined'}>
          Yes
        </Button>
        <Button
          onClick={() => handleConfiguration('configless')}
          color="secondary"
          variant={configuration === 'configless' ? 'contained' : 'outlined'}>
          No
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepThree;
