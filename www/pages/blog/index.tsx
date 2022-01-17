import React from 'react';
import Link from 'next/link';
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography,
  CardActions,
} from '@mui/material';
import Card from '@mui/material/Card';

import { MoreVertTwoTone } from '@mui/icons-material';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center">
        {posts.map((post) => (
          <Grid key={post.id} item sm={12} spacing={5}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                    KF
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertTwoTone />
                  </IconButton>
                }
                title="O megas xrhsths"
                subheader="September 14, 2022"
              />
              <CardContent>
                <Typography
                  sx={{ textTransform: 'uppercase' }}
                  gutterBottom
                  variant="h5"
                  component="div">
                  {post.title}
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
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={'/blog/' + post.id} key={post.id}>
                  <Button fullWidth color="inherit">
                    View more...
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;

//textOverflow: ellipsis
