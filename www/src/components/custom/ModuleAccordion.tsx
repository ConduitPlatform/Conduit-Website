import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion, AccordionDetails, Box, Button, Typography } from '@mui/material';
import moduleMenuItems from '../../fixedData/moduleMenuItems';
import Link from '../../Link';

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<KeyboardArrowDownIcon color={'inherit'} />} {...props} />
))(({ theme }) => ({
  boxShadow: `0 0 0 1px ${theme.palette.divider}`,
  borderRadius: 8,
}));

const ModuleAccordion: FC = () => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary>
        <Typography align={'center'} color={'inherit'}>
          <strong>Modules</strong>
        </Typography>
      </StyledAccordionSummary>
      <AccordionDetails>
        <Box display={'grid'} gap={1}>
          {moduleMenuItems.map((item) => (
            <Button
              fullWidth
              color={'inherit'}
              sx={{ justifyContent: 'flex-start' }}
              component={Link}
              href={item.link}>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                {item.icon} <Typography variant={'subtitle2'}>{item.title}</Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default ModuleAccordion;
