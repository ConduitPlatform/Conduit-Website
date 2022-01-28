import * as React from 'react';
import { Box, Button, MobileStepper, Theme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { FC, useMemo, useState } from 'react';
import { SxObject } from '../../models/SxObjects';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles: SxObject = {
  stepper: {
    background: 'transparent',
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    },
  },
};

const CustomCarousel: FC = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const childrenCount = useMemo(() => React.Children.count(children), [children]);

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {children}
      </AutoPlaySwipeableViews>
      <MobileStepper
        color={'secondary'}
        sx={styles.stepper}
        steps={childrenCount}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === childrenCount - 1}>
            <KeyboardArrowRight color={'secondary'} />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft color={'secondary'} />
          </Button>
        }
      />
    </Box>
  );
};
export default CustomCarousel;
