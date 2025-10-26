'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * OptimizedImage component that uses WebP format with PNG fallback
 * Automatically converts .png extensions to .webp and falls back to PNG if WebP fails to load
 */
export function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(() => {
    // If the src is a PNG file in /images/, use WebP version
    if (src.startsWith('/images/') && src.endsWith('.png')) {
      return src.replace('.png', '.webp');
    }
    return src;
  });

  const handleError = () => {
    // Fallback to PNG if WebP fails to load
    if (imgSrc.endsWith('.webp')) {
      setImgSrc(imgSrc.replace('.webp', '.png'));
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}

