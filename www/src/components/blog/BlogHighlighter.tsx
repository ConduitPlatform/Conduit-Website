import React, { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const BlogHighlighter: FC = ({ children, ...props }) => {
  return (
    <SyntaxHighlighter
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      showLineNumbers
      wrapLines={true}
      style={vsDark}
      {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
export default BlogHighlighter;
