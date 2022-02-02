import React, { FC } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from '../../Link';

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: 8,
  boxShadow: `0 0 0 0.3px ${theme.palette.secondary.dark}, 4px 2px 14px 1px rgba(0,0,0,0.15)`,
}));

type ModuleCardProps = {
  title: string;
  description: string;
  icon: any;
  url?: string;
};
const ModuleFeatureCard: FC<ModuleCardProps> = ({ title, description, icon, url }) => {
  return (
    <StyledCard>
      <Box height={160} overflow={'hidden'}>
        {icon}
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth size="small" color="secondary" component={Link} href={url}>
          View more
        </Button>
      </CardActions>
    </StyledCard>
  );
};
export default ModuleFeatureCard;
