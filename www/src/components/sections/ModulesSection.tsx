import * as React from 'react';
import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import { ViewModuleTwoTone } from '@mui/icons-material';
import CustomCarousel from '../custom/CustomCarousel';
import { ReactElement, useMemo } from 'react';
import { ModuleCardData } from '../custom/ModuleCardData';

export default function ModulesSection() {
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const preparedCards = useMemo(() => {
    const containers: ReactElement[] = [];

    const x = !lg && !md ? 3 : md ? 1 : 2;
    const gridSize = x === 3 ? 4 : x === 2 ? 6 : 12;
    const containerLength = Math.ceil(ModuleCardData.length / x);

    for (let i = 0; i < containerLength; i++) {
      const gridItems = ModuleCardData.slice(i * x, i * x + x);
      containers.push(
        <Grid container>
          {gridItems.map((item, index) => (
            <Grid padding={2} key={`${i}-${index}`} item xs={gridSize}>
              <ModuleCard
                title={item.title}
                href={item.href}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    return containers;
  }, [md, lg]);

  return (
    <Box mt={[12, 16]}>
      <Box py={3}>
        <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
          <ViewModuleTwoTone sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
          <strong> Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various modules Conduit has to offer!</Typography>
      </Box>
      <Box>
        <CustomCarousel>{preparedCards}</CustomCarousel>
      </Box>
    </Box>
  );
}
