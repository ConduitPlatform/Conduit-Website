import React, { useMemo, ChangeEvent, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { TextField, Paper, Container, Grid, Tab, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BlogCard from '../../src/components/blog/BlogCard';
import { Post } from '../../src/models/Post.interface';
import { Tag, tagFilters } from '../../src/models/Tag';
import CustomTabs from '../../src/components/custom/CustomTabs';
import { NextSeo } from 'next-seo';

const Blog: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchString, setSearchString] = useState('');
  const [tag, setTag] = useState<Tag | ''>('');

  const SEO = {
    title: 'Blog Page',
    description: 'All blogs',
    openGraph: {
      title: 'Blog Page',
      description: 'All blogs',
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: Tag) => {
    setTag(newValue);
  };

  const displayedPosts = useMemo(() => {
    let tempPosts = posts.filter((post: Post) =>
      post.metaData.title.toLowerCase().includes(searchString)
    );
    if (tag) {
      tempPosts = tempPosts.filter((post: Post) => post.metaData.tags.find((item) => item == tag));
    }
    return tempPosts;
  }, [posts, tag, searchString]);

  return (
    <Container sx={{ pt: 4, pb: 12 }}>
      <NextSeo {...SEO} />
      <Box
        sx={{
          padding: (theme) => theme.spacing(1, 0),
        }}
        width={'100%'}
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        rowGap={2}
        columnGap={5}
        justifyContent={'center'}>
        <CustomTabs
          value={tag}
          scrollButtons={true}
          variant={'scrollable'}
          color={'secondary'}
          onChange={handleChange}>
          <Tab value="" label="All" />
          {tagFilters.map((item) => (
            <Tab key={item} value={item} label={item} />
          ))}
        </CustomTabs>
        <Paper component="form" sx={{ maxWidth: 600, boxShadow: 0 }}>
          <TextField
            fullWidth
            size={'small'}
            color="secondary"
            placeholder="Search..."
            value={searchString}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Paper>
      </Box>

      <Grid mt={1} container spacing={5} padding="5px">
        {displayedPosts.map((post: Post, index: number) => (
          <BlogCard key={index} post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const articlesDirectory = path.join('blogs');

  const files = fs.readdirSync(articlesDirectory);

  const blogPosts: Post[] = files.map((fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const article = fs.readFileSync(path.join('blogs', fileName));
    const { data: metaData } = matter(article);
    return { slug, metaData } as Post;
  });

  return {
    props: {
      posts: blogPosts.sort(
        (a: Post, b: Post) =>
          new Date(b.metaData.dateString).valueOf() - new Date(a.metaData.dateString).valueOf()
      ),
    },
  };
};
