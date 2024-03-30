import React from 'react';

function Logo({
  height = 45,
  alt,
  src,
  style
}: {
  height?: number;
  alt: string;
  src: string;
  style: React.CSSProperties;
}) {
  return <img src={src} alt={alt} height={height} style={style} />;
}

export default Logo;
