import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export function ClickableImage({ src, alt, className = '', caption }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-12 cursor-pointer" onClick={() => setIsOpen(true)}>
        <ImageWithFallback
          src={src}
          alt={alt}
          className={className}
        />
        {caption && (
          <p className="text-sm text-neutral-500 mt-4 text-center">
            {caption}
          </p>
        )}
      </div>

      {isOpen && (
        <ImageLightbox
          src={src}
          alt={alt}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
