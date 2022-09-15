import React, { useState } from 'react';
import DownloadStep from './DownloadStep';
import DownloadStepOne from './DownloadStepOne';
import DownloadStepTwo from './DownloadStepTwo';
import DownloadStepThree from './DownloadStepThree';
import DownloadStepFour from './DownloadStepFour';

const DownloadContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [os, setOs] = useState<'NPM' | 'MAC OS' | 'Linux' | 'Windows' | ''>('');
  const [osVersion, setOsVersion] = useState<
    '32bit' | '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | ''
  >('');
  const [configuration, setConfiguration] = useState<'configless' | 'configured' | ''>('');

  const handleChangeStep = (step: number) => {
    if (step === 0) {
      setOs('');
      setOsVersion('');
      setConfiguration('');
    }
    if (step === 1) {
      setConfiguration('');
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
        subtitle={currentStep >= 1 ? `${os} ${osVersion}` : ''}>
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
      {currentStep >= 1 && (
        <DownloadStep
          highlighted={currentStep >= 1}
          skipped={os === 'NPM'}
          index={2}
          handleEdit={currentStep > 1 ? () => handleChangeStep(1) : undefined}
          title={'CLI Installation'}>
          {currentStep === 1 && (
            <DownloadStepTwo osVersion={osVersion} os={os} setCurrentStep={setCurrentStep} />
          )}
        </DownloadStep>
      )}
      {currentStep >= 2 && (
        <DownloadStep
          highlighted={currentStep >= 2}
          index={3}
          handleEdit={currentStep > 2 ? () => setCurrentStep(2) : undefined}
          subtitle={currentStep >= 2 ? configuration : ''}
          title={'Conduit Configuration Method'}>
          {currentStep === 2 && (
            <DownloadStepThree
              configuration={configuration}
              setConfiguration={setConfiguration}
              setCurrentStep={setCurrentStep}
            />
          )}
        </DownloadStep>
      )}
      {currentStep >= 3 && (
        <DownloadStep highlighted={currentStep >= 3} index={4} title={'Bootstrap Conduit'}>
          {currentStep === 3 && <DownloadStepFour os={os} configuration={configuration} />}
        </DownloadStep>
      )}
    </>
  );
};

export default DownloadContainer;
