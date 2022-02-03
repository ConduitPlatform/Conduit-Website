import React, { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion, AccordionDetails, Box, Button, Typography } from '@mui/material';
import Link from '../../Link';
import { ModuleCardData } from './ModuleCardData';

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<KeyboardArrowDownIcon color={'inherit'} />} {...props} />
))(() => ({
  '& .MuiAccordionSummary-content': {
    flexGrow: 0,
  },
}));

type ModuleAccordionProps = {
  onClose: () => void;
  isDrawerOpen?: boolean;
};
const ModuleAccordion: FC<ModuleAccordionProps> = ({ isDrawerOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    if (!isDrawerOpen) setIsOpen(false);
  }, [isDrawerOpen]);

  return (
    <StyledAccordion expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledAccordionSummary>
        <Typography align={'center'} color={'inherit'}>
          <strong>MODULES</strong>
        </Typography>
      </StyledAccordionSummary>
      <AccordionDetails>
        <Box display={'grid'} gap={1}>
          {ModuleCardData.map((item) => (
            <Button
              key={item.title}
              fullWidth
              size={'small'}
              color={'inherit'}
              sx={{ justifyContent: 'flex-start' }}
              component={Link}
              onClick={handleClose}
              href={item.href}
              startIcon={item.icon}>
              <Box display={'flex'} gap={1} alignItems={'center'}>
                <Typography variant={'caption'}>{item.title}</Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default ModuleAccordion;
