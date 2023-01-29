import React from 'react';
/** @jsxImportSource theme-ui */
import Image from 'next/image';

export default function NextImage({ src, alt, ...rest }) {
  return (
    <Image
      alt={alt}
      src={src}
      {...rest}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
}

const styles = {
  container: {
    width: '50vw',
    height: '50vh',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative !important',
    objectFit: 'cover', // Optional
  },
};
