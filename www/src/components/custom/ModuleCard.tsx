import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, IconButton, Paper } from '@mui/material';

import { ArrowForward } from '@mui/icons-material';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '12px',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '&:hover': {
    boxShadow: `0 0 0 1px ${theme.palette.secondary.main}, 3px 3px 12px 2px rgba(0,0,0, 0.3)`,
  },
}));

const StyledIconContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px',
  flexWrap: 'wrap',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  paddingTop: '7px',
}));

interface ModuleCardProps {
  icon?: ReactComponentElement<any>;
  title: string;
  subtitle: ReactComponentElement<any>;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, subtitle, icon }) => {
  return (
    <ModuleCardComponent variant="outlined">
      <StyledIconContainer>
        {icon}
        <Typography textAlign="center">{title}</Typography>
        <ArrowForward />
      </StyledIconContainer>
      <Divider />
      <StyledSubtitle variant="subtitle2">
        {subtitle}
        <StyledIconButton size="small"></StyledIconButton>
      </StyledSubtitle>
    </ModuleCardComponent>
  );
};

export default ModuleCard;
