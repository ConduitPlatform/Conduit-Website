import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import BlogHeader from '../../src/components/blog/BlogHeader';
import TableOfContents from '../../src/components/blog/TableOfContents';
import TableOfContentsItem from '../../src/components/blog/TableOfContentsItem';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import { Box, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import BlogImageContainer from '../../src/components/blog/BlogImageContainer';

hljs.registerLanguage('typescript', typescript);

const components = {
  BlogHeaderComponent: BlogHeader,
  TableOfContentsComponent: TableOfContents,
  TableOfContentsItemComponent: TableOfContentsItem,
  BlogImageContainer: BlogImageContainer,
};

export default function Article({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Container sx={{ pt: 4, pb: 12 }} maxWidth={'xl'}>
      <Button
        sx={{ marginLeft: [0, 0, 0, 6] }}
        color={'inherit'}
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}>
        GO BACK
      </Button>
      <Box maxWidth={'lg'} margin={'auto'} mt={1}>
        <MDXRemote {...source} components={components} />
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join('blogs');

  const files = fs.readdirSync(articlesDirectory);

  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false, // if access path/slug that doesn't exist -> 404 page
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({ params: { slug } }: Params) => {
  const blog = fs.readFileSync(path.join('blogs', slug + '.mdx'));

  const { data: metaData, content } = matter(blog);

  const mdxSource = await serialize(content, { scope: metaData });
  return { props: { source: mdxSource } };
};
