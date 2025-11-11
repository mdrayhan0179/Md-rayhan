import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { AppContextType } from '../types';
import { IconLoader, IconWand } from './icons';

interface ImageWithAIProps {
  imageId: string;
  prompt: string;
  alt: string;
  className: string;
  priority?: boolean;
  onImageLoad?: () => void;
}

const ImageWithAI: React.FC<ImageWithAIProps> = ({ imageId, prompt, alt, className, priority = false, onImageLoad = () => {} }) => {
  const { generatedImages, loadingImages, generateImage } = useContext(AppContext) as AppContextType;
  const imageUrl = generatedImages[imageId];
  const isLoading = loadingImages[imageId];

  useEffect(() => {
    // Generate image on mount if it doesn't exist
    if (!imageUrl && !isLoading) {
      generateImage(prompt, imageId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageId, prompt, imageUrl, isLoading]);

  const handleGenerateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent clicks (e.g., on ProductCard)
    e.preventDefault();
    generateImage(prompt, imageId);
  };
  
  if (isLoading) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}>
        <IconLoader />
        <span className="absolute bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400 font-sans">Generating...</span>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={onImageLoad}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'https://picsum.photos/800/1200';
        }}
      />
    );
  }

  // Fallback / Initial state before generation starts
  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}>
      <button 
        onClick={handleGenerateClick}
        className="z-10 p-3 bg-white/70 dark:bg-gray-700/70 dark:text-white backdrop-blur-sm rounded-full text-black transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-600"
      >
        <IconWand />
      </button>
      <span className="absolute bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400 font-sans">Ready to generate</span>
    </div>
  );
};

export default ImageWithAI;
