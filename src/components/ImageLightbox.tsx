import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/90 p-4"
      style={{ width: '100vw', height: '100vh' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors z-10"
        aria-label="Fechar"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div 
        className="max-w-7xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
