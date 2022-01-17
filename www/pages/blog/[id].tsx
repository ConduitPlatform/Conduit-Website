import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CustomHeaderComponent = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(4),
  textDecoration: 'underline',
  textDecorationColor: `${theme.palette.secondary.main}`,
  textTransform: 'uppercase',
  '&:hover': {
    textShadow: ` 2px 2px 5px ${theme.palette.primary.main}`,
  },
}));

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
      <Link href="/blog">
        <Button color="secondary" startIcon={<ArrowBackIcon />}>
          go back
        </Button>
      </Link>
      <CustomHeaderComponent marginTop="30px" variant="h5" textAlign="center">
        <strong>{post.title}</strong>
      </CustomHeaderComponent>
      <Typography>{post.body}</Typography>
      <Box padding={10}>
        <Typography>Author:{post.userId}</Typography>
      </Box>
    </Container>
  );
};

export default Details;
