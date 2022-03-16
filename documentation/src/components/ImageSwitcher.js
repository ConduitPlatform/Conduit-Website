import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ImageSwitcher = ({lightImageSrc, darkImageSrc, altText}) => {
  const { isDarkTheme } = useThemeContext();
  lightImageSrc = useBaseUrl(lightImageSrc)
  darkImageSrc = useBaseUrl(darkImageSrc)
  
  return (
    <img src={isDarkTheme ? darkImageSrc : lightImageSrc} alt={altText} />
  )
}

export default ImageSwitcher;
