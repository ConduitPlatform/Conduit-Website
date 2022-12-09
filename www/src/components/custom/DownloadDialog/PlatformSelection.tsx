import React, { FC } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PlatformCard from './PlatformCard';
import { Platform } from './types';
import logos from '../../../../public/icons/installation';

type Props = {
  platform: Platform;
  setPlatform: (platform: Platform) => void;
};

const PlatformSelection: FC<Props> = ({ platform, setPlatform }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (platform === Platform.UNKNOWN) {
    const p = window.navigator.platform;
    setPlatform(
      p.startsWith('Linux') ? Platform.LINUX : p.startsWith('Mac') ? Platform.MAC : Platform.NPM
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={mobile ? 1 : 2}
      justifyContent={mobile ? 'center' : 'space-around'}
      alignSelf="center"
      flexWrap="wrap">
      <PlatformCard
        checked={platform === Platform.LINUX}
        img={<logos.linux />}
        handleChecked={() => setPlatform(Platform.LINUX)}
      />
      <PlatformCard
        checked={platform === Platform.MAC}
        img={<logos.apple />}
        handleChecked={() => setPlatform(Platform.MAC)}
      />
      <PlatformCard
        checked={platform === Platform.NPM}
        img={<logos.npm />}
        handleChecked={() => setPlatform(Platform.NPM)}
      />
      <PlatformCard
        checked={platform === Platform.HELM}
        img={theme.palette.mode === 'dark' ? <logos.helmWhite /> : <logos.helmBlue />}
        handleChecked={() => setPlatform(Platform.HELM)}
      />
    </Box>
  );
};

export default PlatformSelection;
