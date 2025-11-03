import React, { useState } from 'react';

export default function ImageWithFallback({ src, alt, className, fallback = 'https://via.placeholder.com/600x400?text=Image' }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  );
}


