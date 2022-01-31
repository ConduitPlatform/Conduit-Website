import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import { ViewModuleTwoTone } from '@mui/icons-material';
import { ModuleCardData } from '../custom/ModuleCardData';
import CustomSnapBox from '../custom/CustomSnapBox';

export default function ModulesSection() {
  return (
    <Box mt={[12, 16]}>
      <Box py={3}>
        <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
          <ViewModuleTwoTone sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
          <strong> Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various modules Conduit has to offer!</Typography>
      </Box>
      <CustomSnapBox pb={1} gap={3}>
        {ModuleCardData.map((item, index) => (
          <Box key={index}>
            <ModuleCard
              title={item.title}
              href={item.href}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          </Box>
        ))}
      </CustomSnapBox>
    </Box>
  );
}
