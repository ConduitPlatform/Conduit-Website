import React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Post } from '../../models/Post.interface';
import { Tag } from '../../models/Tag';
import { Avatar, CardHeader, Grid } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  marginTop: 2,
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 0 1px rgba(130,130,130,0.3)',
}));

const BlogCard: FC<{ post: Post }> = ({ post }: { post: Post }) => {
  const { slug, metaData } = post;
  const { title, dateString, mainImageUrl, excerpt, tags } = metaData;
  return (
    <Grid lg={6} xs={12} item>
      <StyledCard>
        <CardMedia
          component="img"
          style={{ borderRadius: '8px' }}
          height="200"
          image={mainImageUrl}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
              KF
            </Avatar>
          }
          title={
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary">
              {excerpt}
            </Typography>
          }
        />
        <CardContent>
          <Stack direction="row" spacing={1}>
            {tags.map((tag: Tag, index: number) => (
              <Link key={index} href={`/blog`} passHref>
                <Chip label={tag} color="secondary" variant="outlined" />
              </Link>
            ))}
          </Stack>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
          <Typography variant="body2">{dateString}</Typography>
          <Link href={`/blog/${slug}`} passHref>
            <Button color="secondary" size="small">
              Read more
            </Button>
          </Link>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

export default BlogCard;
