"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallback: string;
}

const ImageWithFallback = ({
  fallback,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
