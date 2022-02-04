import * as React from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import { Box, FadeProps, Grow } from '@mui/material';

type extraProps = {
  transformOrigin?: string;
};

const FadeOnScrollSection: FC<FadeProps & extraProps> = ({
  transformOrigin = 'center',
  children,
  ...props
}) => {
  const sectionRef = useRef<any | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sectionRef.current);
      }
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <Box ref={sectionRef}>
      <Grow
        in={isVisible}
        timeout={{ enter: 1500 }}
        style={{ transitionDelay: '250ms', transformOrigin: transformOrigin }}
        {...props}>
        <Box>{children}</Box>
      </Grow>
    </Box>
  );
};

export default FadeOnScrollSection;
