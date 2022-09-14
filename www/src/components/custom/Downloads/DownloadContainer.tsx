import { Box } from '@mui/material';
import React, { useState } from 'react';
import DownloadStep from './DownloadStep';
import DownloadStepOne from './DownloadStepOne';

const DownloadContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [os, setOs] = useState<'MAC OS' | 'Linux' | 'Windows' | ''>('');
  const [osVersion, setOsVersion] = useState<'32bit' | '64bit' | 'amd64' | 'arm64' | ''>('');
  return (
    <>
      <DownloadStep
        highlighted={currentStep >= 0}
        index={1}
        handleEdit={currentStep > 0 ? () => setCurrentStep(0) : undefined}
        title={'Platform'}
        subtitle={currentStep >= 1 ? `${os} - ${osVersion}` : ''}>
        {currentStep === 0 && (
          <DownloadStepOne
            os={os}
            setOs={setOs}
            setCurrentStep={setCurrentStep}
            osVersion={osVersion}
            setOsVersion={setOsVersion}
          />
        )}
      </DownloadStep>
      <DownloadStep
        highlighted={currentStep >= 1}
        index={2}
        handleEdit={currentStep > 1 ? () => setCurrentStep(1) : undefined}
        title={'Configuration'}>
        {currentStep === 1 && <Box>123</Box>}
      </DownloadStep>
    </>
  );
};

export default DownloadContainer;
