import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AppContextType, Product } from '../types';
import { IconHeart } from './icons';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { navigate } = useContext(AppContext) as AppContextType;
  
  return (
    <div 
      className="group cursor-pointer" 
      onClick={() => navigate('product', product.id)}
    >
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Add to wishlist logic here
            }} 
            className="p-2 bg-white/70 dark:bg-gray-700/70 dark:text-white backdrop-blur-sm rounded-full text-black transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-white dark:hover:bg-gray-600"
            aria-label="Add to wishlist"
          >
            <IconHeart />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-sans text-sm text-gray-800 dark:text-gray-200">{product.name}</h3>
        <p className="font-sans text-sm font-medium text-gray-900 dark:text-white mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;