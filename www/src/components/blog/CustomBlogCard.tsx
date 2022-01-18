import React, { FC } from 'react';
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  Card,
  Grid,
  Typography,
  CardActions,
} from '@mui/material';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  body: string;
  id: string;
}

export const CustomBlogCard: FC<BlogCardProps> = ({ title, body, id }) => {
  return (
    <Grid key={id} item sm={12} spacing={5}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
              KF
            </Avatar>
          }
          title="O megas xrhsths"
          subheader="September 14, 2022"
        />
        <CardContent>
          <Typography sx={{ textTransform: 'uppercase' }} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            sx={{
              display: '-webkit-box',
              maxWidth: '800px',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            variant="body2"
            color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={'/blog/' + id} key={id}>
            <Button fullWidth color="inherit">
              View more...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
