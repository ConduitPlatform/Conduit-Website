import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogHeader from '../../src/components/blog/BlogHeader';
import SectionItem from '../../src/components/blog/SectionItem';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import { Box, Button, Container, Typography } from '@mui/material';
import BlogImageContainer from '../../src/components/blog/BlogImageContainer';
import BlogHighlighter from '../../src/components/blog/BlogHighlighter';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

hljs.registerLanguage('typescript', typescript);

const components = {
  BlogHeaderComponent: BlogHeader,
  SectionItemComponent: SectionItem,
  BlogImageContainer: BlogImageContainer,
  BlogHighlighter: BlogHighlighter,
  Box: Box,
  Typography: Typography,
};

export default function Article({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const SEO = {
    title: `Conduit Blog | ${source.scope.title}`,
    description: ` ${source.scope.excerpt}`,
    openGraph: {
      title: `Conduit Blog | ${source.scope.title}`,
      description: ` ${source.scope.excerpt}`,
      article: {
        tags: source.scope.tags,
      },
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container sx={{ pt: 4, pb: 12 }} maxWidth={'xl'}>
        <Link href="/blog" passHref>
          <Button sx={{ marginLeft: [0, 0, 0, 6] }} color={'inherit'} startIcon={<ArrowBackIcon />}>
            GO BACK
          </Button>
        </Link>
        <Box maxWidth={'lg'} margin={'auto'} mt={1}>
          <MDXRemote {...source} components={components} />
        </Box>
      </Container>
    </>
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
