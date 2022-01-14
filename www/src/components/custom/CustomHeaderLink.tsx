import NextLink from '../../Link';
import { Button } from '@mui/material';
import * as React from 'react';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { LinkProps } from 'next/link';

type variantTypes = 'text' | 'outlined' | 'contained' | undefined;

type ExtraLinkProps = {
  NextLinkProps: LinkProps;
  variantActive?: variantTypes;
  variantInactive?: variantTypes;
};

const CustomHeaderLink: FC<ExtraLinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();
  const variants: { active: variantTypes; inActive: variantTypes } = useMemo(
    () => ({
      active: props?.variantActive ?? 'outlined',
      inActive: props?.variantInactive ?? 'text',
    }),
    [props.variantActive, props.variantInactive]
  );
  return (
    <NextLink prefetch underline={'none'} {...props.NextLinkProps}>
      <Button variant={pathname === props.NextLinkProps.href ? variants.active : variants.inActive}>
        {children}
      </Button>
    </NextLink>
  );
};

export default CustomHeaderLink;
