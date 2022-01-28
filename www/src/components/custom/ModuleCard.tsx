import * as React from 'react';
import { FC, ReactComponentElement } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider, Paper } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '../../Link';

const ModuleCardComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  border: 'none',
  boxShadow: `inset 0 0 0 0.5px ${theme.palette.secondary.dark}`,
  textDecoration: 'none',
  borderRadius: '12px',
  height: '100%',
}));

const StyledIconContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px',
  flexWrap: 'wrap',
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(3),
}));

interface ModuleCardProps {
  icon?: ReactComponentElement<any>;
  title: string;
  subtitle: string;
  href: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, subtitle, icon, href }) => {
  return (
    <Link href={href} passhref>
      <ModuleCardComponent variant="outlined">
        <StyledIconContainer>
          {icon}
          <Typography variant={'h6'} textAlign="center">
            <strong>{title}</strong>
          </Typography>
          <ArrowForwardIosIcon />
        </StyledIconContainer>
        <Divider />
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </ModuleCardComponent>
    </Link>
  );
};

export default ModuleCard;
