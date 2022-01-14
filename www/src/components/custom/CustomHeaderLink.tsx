import NextLink from '../../Link';
import { Button } from '@mui/material';
import * as React from 'react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { LinkProps } from 'next/link';

const CustomHeaderLink: FC<LinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();
  return (
    <NextLink prefetch underline={'none'} {...props}>
      <Button variant={pathname === props.href ? 'outlined' : 'text'}>{children}</Button>
    </NextLink>
  );
};

export default CustomHeaderLink;
