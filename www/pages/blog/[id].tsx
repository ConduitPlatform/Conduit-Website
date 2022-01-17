import React from 'react';
import { Container, Typography } from '@mui/material';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <Container>
      <Typography variant="h5">
        <strong>{post.title}</strong>
      </Typography>
      <Typography>{post.body}</Typography>
      <Typography>{post.userId}</Typography>
    </Container>
  );
};

export default Details;
