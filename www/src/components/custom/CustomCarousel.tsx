import * as React from 'react';
import { Box, IconButton, MobileStepper, Theme } from '@mui/material';
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

  const childrenCount = useMemo(() => {
    setActiveStep(0);
    return React.Children.count(children);
  }, [children]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === childrenCount - 1) return 0;
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) return childrenCount - 1;
      return prevActiveStep - 1;
    });
  };

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
          <IconButton size="small" color={'secondary'} onClick={handleNext}>
            <KeyboardArrowRight color={'secondary'} />
          </IconButton>
        }
        backButton={
          <IconButton size="small" color={'secondary'} onClick={handleBack}>
            <KeyboardArrowLeft color={'secondary'} />
          </IconButton>
        }
      />
    </Box>
  );
};
export default CustomCarousel;
