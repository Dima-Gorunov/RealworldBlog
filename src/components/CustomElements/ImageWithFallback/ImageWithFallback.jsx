import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallbackSrc, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const handleFallback = () => {
    setImageSrc(fallbackSrc);
  };
  return <img src={imageSrc} onError={handleFallback} alt={alt} {...props} />;
};

export default ImageWithFallback;
