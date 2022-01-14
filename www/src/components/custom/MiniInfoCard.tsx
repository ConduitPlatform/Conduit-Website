import * as React from 'react';
import { Card, CardProps, Grid, Typography } from '@mui/material';
import { FC, ReactComponentElement } from 'react';
import { styled } from '@mui/material/styles';

interface MiniInfoProps {
  imageComponent: ReactComponentElement<any>;
  title: string;
  subText: string;
}

const CustomCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  transition: '0.2s',
  '&:hover': {
    boxShadow: '3px 3px 12px 1px rgba(0,0,0,0.1)',
  },
}));

const styles = {
  image: {
    '&>:first-child': {
      width: 60,
      height: 60,
    },
  },
};
const MiniInfoCard: FC<MiniInfoProps & CardProps> = ({
  imageComponent,
  title,
  subText,
  ...props
}) => {
  return (
    <CustomCard elevation={0} variant={'outlined'} {...props}>
      <Grid my={2} sx={styles.image} container justifyContent={'center'}>
        {imageComponent}
      </Grid>
      <Typography align={'center'} variant={'h6'} gutterBottom>
        <strong>{title}</strong>
      </Typography>
      <Typography variant={'body2'} align={'center'}>
        {subText}
      </Typography>
    </CustomCard>
  );
};
export default MiniInfoCard;
