import { FC, ReactElement } from 'react';
import { Box, Card, CardProps, Divider, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
  card: { padding: 3, borderRadius: 3, height: '100%' },
};

type AboutCardProps = {
  title: string;
  icon: ReactElement;
  text: string;
  cursor?: string;
  hasButton?: boolean;
};

const AboutCard: FC<AboutCardProps & CardProps> = ({
  cursor = 'auto',
  hasButton = false,
  title,
  icon,
  text,
  ...props
}) => {
  return (
    <Card sx={{ ...styles.card, cursor: cursor }} elevation={0} {...props}>
      <Box>
        <Box mb={1} display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
          <Box display={'flex'} alignItems={'center'} gap={2}>
            {icon}
            <Typography variant={'h6'}>
              <strong>{title}</strong>
            </Typography>
          </Box>
          {hasButton && (
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
        <Divider />
        <Typography pt={1} pb={2} variant={'body1'} my={2}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};

export default AboutCard;
