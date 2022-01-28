import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, Paper } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '../../Link';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '12px',
  flexDirection: 'column',
  transition: '0.5s',
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
  listItems?: string[];
  href: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, subtitle, icon, href, listItems }) => {
  return (
    <Link href={href} passhref>
      <ModuleCardComponent variant="outlined">
        <StyledIconContainer>
          {icon}
          <Typography textAlign="center">
            <strong>{title}</strong>
          </Typography>
          <ArrowForwardIosIcon />
        </StyledIconContainer>
        <Divider />
        <StyledSubtitle variant="subtitle2">
          <Typography>{subtitle}</Typography>
        </StyledSubtitle>
      </ModuleCardComponent>
    </Link>
  );
};

export default ModuleCard;
