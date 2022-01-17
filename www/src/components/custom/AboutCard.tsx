import { FC, ReactElement } from 'react';
import { Box, Card, CardProps, Divider, Typography } from '@mui/material';
import * as React from 'react';

const styles = {
  card: { padding: 4, borderRadius: 3 },
};

type AboutCardProps = {
  title: string;
  icon: ReactElement;
  text: string;
};

const AboutCard: FC<AboutCardProps & CardProps> = ({ title, icon, text, ...props }) => {
  return (
    <Card sx={styles.card} elevation={0} {...props}>
      <Box>
        <Box mb={2} display={'flex'} alignItems={'center'} gap={3}>
          {icon}
          <Typography variant={'h5'}>
            <strong>{title}</strong>
          </Typography>
        </Box>
        <Divider />
        <Typography my={2}>{text}</Typography>
      </Box>
    </Card>
  );
};

export default AboutCard;
