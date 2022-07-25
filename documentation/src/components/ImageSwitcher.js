import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ImageSwitcher = ({lightImageSrc, darkImageSrc, altText}) => {
  const { isDarkTheme } = useColorMode();
  lightImageSrc = useBaseUrl(lightImageSrc)
  darkImageSrc = useBaseUrl(darkImageSrc)
  
  return (
    <img src={isDarkTheme ? darkImageSrc : lightImageSrc} alt={altText} />
  )
}

export default ImageSwitcher;
