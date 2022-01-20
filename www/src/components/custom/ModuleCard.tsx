import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, IconButton, Paper } from '@mui/material';

import { ArrowForward } from '@mui/icons-material';
import Link from '../../Link';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '12px',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  '&:hover': {
    boxShadow: `0 0 0 1px ${theme.palette.secondary.main}, 3px 3px 12px 2px rgba(0,0,0, 0.2)`,
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
        <Typography textAlign="center">{title}</Typography>
        <IconButton size="small" href={href} component={Link}>
          <ArrowForward />
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
