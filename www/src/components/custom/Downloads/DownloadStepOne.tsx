import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import OSCard from './OsCard';

interface Props {
  os: any;
  setOs: any;
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepOne: FC<Props> = ({ os, setOs, setCurrentStep }) => {
  return (
    <Box py={2} pb={6} display="flex" flexDirection="column" gap={2}>
      <OSCard
        title="MAC OS"
        subtitle="Έκανες αγορά σε συνεργαζόμενο κατάστημα αλλά δεν εμφανίζεται στις Αγορές σου"
        checked={os === 'mac'}
        handleChecked={() => setOs('mac')}
      />
      <OSCard
        title="Linux"
        subtitle="Έκανες αγορά σε συνεργαζόμενο κατάστημα αλλά το ποσό της επιστροφής σου φαίνεται λάθος"
        checked={os === 'linux'}
        handleChecked={() => setOs('linux')}
      />
      <OSCard
        title="Windows"
        subtitle={`Ενώ η αγορά σου εκτελέστηκε κανονικά, εμφανίζεται σε κατάσταση "Ακυρωμένη"`}
        checked={os === 'windows'}
        handleChecked={() => setOs('windows')}
      />
      <Box pt={1}>
        <Button
          variant="contained"
          sx={{ borderRadius: '12px' }}
          color="secondary"
          onClick={() => setCurrentStep(1)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
