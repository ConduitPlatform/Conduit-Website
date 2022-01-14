import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, IconButton, Paper } from '@mui/material';

import { ArrowForward } from '@mui/icons-material';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderWidth: '1px',
  borderRadius: '12px',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '&:hover': {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
  },
  '&:focus': {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
  },
}));

const StyledIconContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

interface ModuleCardProps {
  icon: ReactComponentElement<any>;
  title: string;
  subtitle: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, subtitle, icon }) => {
  return (
    <ModuleCardComponent variant="outlined">
      <StyledIconContainer>
        {icon}
        <Typography align="center">&nbsp; {title}</Typography>
      </StyledIconContainer>
      <Divider />
      <Typography variant="subtitle2">
        {subtitle}
        <StyledIconButton size="small">
          <ArrowForward />
        </StyledIconButton>
      </Typography>
    </ModuleCardComponent>
  );
};

export default ModuleCard;
