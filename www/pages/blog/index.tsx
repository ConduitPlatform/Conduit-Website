import React from 'react';
import { Container, Grid, Fade } from '@mui/material';
import { CustomBlogCard } from '../../src/components/custom/CustomBlogCard';

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
      <Fade in={true} timeout={1500} enter={1400}>
        <Grid container gap={4} justifyContent="center" alignItems="center">
          {posts.map((post) => (
            <CustomBlogCard key={post.id} title={post.title} body={post.body} id={post.id} />
          ))}
        </Grid>
      </Fade>
    </Container>
  );
};

export default Posts;
