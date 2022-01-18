import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  title: string;
  dateString: string;
  mainImageUrl: string;
  publisher: string;
  publisherIcon: string;
  publisherPosition: string;
}
const styles = {
  image: { borderRadius: 8, width: '100%', height: 600, objectFit: 'cover' },
  avatar: { borderRadius: '50%', objectFit: 'cover' },
  opacity: { opacity: 0.7 },
} as const;

const BlogHeader: FC<Props> = ({
  publisherPosition,
  publisher,
  publisherIcon,
  title,
  dateString,
  mainImageUrl,
}) => {
  return (
    <Box>
      <img src={mainImageUrl} alt={'img'} style={styles.image} />
      <Box display={'flex'} padding={2} gap={1.5}>
        <img style={styles.avatar} width={'50px'} height={'50px'} src={publisherIcon} alt={'img'} />
        <Box display={'grid'} alignItems={'center'}>
          <Typography variant={'subtitle1'}>
            <strong>{publisher}</strong>
          </Typography>
          <Typography variant={'caption'} sx={styles.opacity}>
            {dateString}
          </Typography>
        </Box>
        {publisherPosition && (
          <Box pl={6} display={'grid'} alignItems={'center'}>
            <Typography variant={'subtitle2'}>
              <strong>Position</strong>
            </Typography>
            <Typography variant={'caption'} color={'secondary'}>
              {publisherPosition}
            </Typography>
          </Box>
        )}
      </Box>
      <Typography my={3} variant={'h4'}>
        <strong>{title}</strong>
      </Typography>
    </Box>
  );
};

export default BlogHeader;
