import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from '@mui/system';

const BlogHighlighter: FC = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <SyntaxHighlighter
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      showLineNumbers
      wrapLines={true}
      style={theme.palette.mode === 'dark' ? materialLight : materialDark}
      {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
export default BlogHighlighter;
