import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, IconButton, Paper, alpha } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '../../Link';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '12px',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  transition: '0.5s',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: `3px 4px 5px 1px ${alpha(
      theme.palette.secondary.main,
      0.35
    )}, 3px 3px 12px 2px rgba(0,0,0, 0.2)`,
  },
}));

const StyledIconContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px',
  flexWrap: 'wrap',
}));

const StyledSubtitle = styled(Typography)(() => ({
  paddingTop: '7px',
}));

interface ModuleCardProps {
  icon?: ReactComponentElement<any>;
  title: string;
  subtitle: string;
  listItems: string[];
  href: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, subtitle, icon, href, listItems }) => {
  return (
    <ModuleCardComponent variant="outlined">
      <StyledIconContainer>
        {icon}
        <Typography textAlign="center">
          <strong>{title}</strong>
        </Typography>
        <IconButton size="small" href={href} component={Link}>
          <ArrowForwardIosIcon />
        </IconButton>
      </StyledIconContainer>
      <Divider />
      <StyledSubtitle variant="subtitle2">
        <Typography>{subtitle}</Typography>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </StyledSubtitle>
    </ModuleCardComponent>
  );
};

export default ModuleCard;
