import React from 'react';
import Image from 'next/image';
import { ImageLoader, ImageProps } from 'next/dist/client/image';

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

const CloudflareImage = (props: ImageProps) => {
  return <Image loader={cloudflareLoader} {...props} />;
};

export default CloudflareImage;
