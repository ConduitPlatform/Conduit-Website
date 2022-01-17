import { FC, ReactElement } from 'react';
import { Box, Card, Divider, Typography } from '@mui/material';
import * as React from 'react';

const styles = {
  card: { padding: 4, borderRadius: 3 },
};

type AboutCardProps = {
  title: string;
  icon: ReactElement;
  text: string;
};

const AboutCard: FC<AboutCardProps> = ({ title, icon, text }) => {
  return (
    <Card sx={styles.card} elevation={0}>
      <Box>
        <Box mb={2} display={'flex'} alignItems={'center'} gap={3}>
          {icon}
          <Typography variant={'h5'}>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Divider />
        <Typography my={2} variant={'h6'}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};

export default AboutCard;
