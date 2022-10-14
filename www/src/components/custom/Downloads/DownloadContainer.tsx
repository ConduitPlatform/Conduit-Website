import React, { useState } from 'react';
import DownloadStep from './DownloadStep';
import DownloadStepOne from './DownloadStepOne';
import DownloadStepTwo from './DownloadStepTwo';
import DownloadStepThree from './DownloadStepThree';
import { useTheme, useMediaQuery } from '@mui/material';

const DownloadContainer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentStep, setCurrentStep] = useState(0);
  const [platform, setPlatform] = useState<'NPM' | 'MAC OS' | 'Linux' | 'Windows' | ''>('NPM');
  const [osVersion, setOsVersion] = useState<'64bit' | 'amd64' | 'arm64' | 'appleSilicon' | ''>('');

  const handleChangeStep = (step: number) => {
    if (step === 0) {
      setPlatform('NPM');
      setOsVersion('');
    }

    setCurrentStep(step);
  };

  return (
    <>
      <DownloadStep
        highlighted={currentStep >= 0}
        index={1}
        handleEdit={currentStep > 0 ? () => handleChangeStep(0) : undefined}
        title={'Platform'}
        subtitle={!mobile && currentStep >= 1 ? `${platform} ${osVersion}` : ''}>
        {currentStep === 0 && (
          <DownloadStepOne
            platform={platform}
            setPlatform={setPlatform}
            setCurrentStep={setCurrentStep}
            osVersion={osVersion}
            setOsVersion={setOsVersion}
          />
        )}
      </DownloadStep>
      {currentStep >= 1 && (
        <DownloadStep
          highlighted={currentStep >= 1}
          skipped={platform === 'NPM'}
          index={2}
          handleEdit={currentStep > 1 ? () => handleChangeStep(1) : undefined}
          title={'CLI Installation'}>
          {currentStep === 1 && (
            <DownloadStepTwo
              osVersion={osVersion}
              platform={platform}
              setCurrentStep={setCurrentStep}
            />
          )}
        </DownloadStep>
      )}
      {currentStep >= 2 && (
        <DownloadStep
          highlighted={currentStep >= 2}
          index={3}
          handleEdit={currentStep > 2 ? () => setCurrentStep(2) : undefined}
          title={!mobile ? 'Conduit Configuration Method' : 'Configuration'}>
          {currentStep === 2 && <DownloadStepThree />}
        </DownloadStep>
      )}
    </>
  );
};

export default DownloadContainer;
