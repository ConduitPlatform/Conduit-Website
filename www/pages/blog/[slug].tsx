import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import BlogHeaderComponent from '../../src/components/custom/BlogHeader.component';
import TableOfContentsComponent from '../../src/components/custom/TableOfContents.component';
import TableOfContentsItemComponent from '../../src/components/custom/TableOfContentsItem.component';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

import 'highlight.js/styles/vs2015.css';

hljs.registerLanguage('typescript', typescript);

const components = {
  BlogHeaderComponent,
  TableOfContentsComponent,
  TableOfContentsItemComponent,
};

export default function Article({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <MDXRemote {...source} components={components} />
    </div>
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
