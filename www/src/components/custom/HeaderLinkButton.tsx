import { Button, ButtonProps } from '@mui/material';
import * as React from 'react';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import Link from '../../Link';

type variantTypes = 'text' | 'outlined' | 'contained' | undefined;

type ExtraLinkProps = {
  ButtonProps?: ButtonProps;
  variantActive?: variantTypes;
  variantInactive?: variantTypes;
};

const HeaderLinkButton: FC<ExtraLinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();
  const variants: { active: variantTypes; inActive: variantTypes } = useMemo(
    () => ({
      active: props?.variantActive ?? 'outlined',
      inActive: props?.variantInactive ?? 'text',
    }),
    [props.variantActive, props.variantInactive]
  );
  return (
    <Button
      component={Link}
      variant={pathname === props.ButtonProps?.href ? variants.active : variants.inActive}
      {...props.ButtonProps}>
      {children}
    </Button>
  );
};

export default HeaderLinkButton;
