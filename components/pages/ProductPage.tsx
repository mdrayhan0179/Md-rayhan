import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { products } from '../../constants';
import { AppContextType } from '../../types';
import AccordionItem from '../AccordionItem';
import ProductCard from '../ProductCard';
import { IconMinus, IconPlus } from '../icons';

const ProductPage: React.FC = () => {
  const { selectedProductId, addToCart } = useContext(AppContext) as AppContextType;
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === selectedProductId);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
  }, [selectedProductId]);

  if (!product) {
    return (
      <div className="text-center py-40 font-sans dark:text-white">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, 'cart');
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, 'checkout');
  };

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800">
            <img
              src={product.images[activeImage]}
              alt={`${product.name} ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((imgSrc, index) => (
              <div 
                key={index}
                className={`aspect-square bg-gray-100 dark:bg-gray-800 cursor-pointer ${index === activeImage ? 'border-2 border-black dark:border-white' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={imgSrc}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-12">
          <h1 className="text-4xl font-serif mb-4 dark:text-white">{product.name}</h1>
          <p className="text-2xl font-sans font-medium mb-6 dark:text-white">${product.price.toFixed(2)}</p>
          <p className="font-sans text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
            {product.details}
          </p>
          <div className="mb-6">
            <label htmlFor="size" className="block text-sm font-medium uppercase tracking-wider mb-3 dark:text-gray-100">Size</label>
            <select 
              id="size" 
              className="w-full appearance-none bg-white border border-gray-300 p-4 pr-10 text-base font-sans rounded-none focus:outline-none focus:border-black
                         dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-white"
            >
              <option>Select Size</option>
              {product.availableSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-4 mb-6">
            <div className="flex border border-gray-300 dark:border-gray-600 items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                aria-label="Decrease quantity"
              >
                <IconMinus />
              </button>
              <span className="p-2 w-12 text-center font-medium font-sans dark:text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                aria-label="Increase quantity"
              >
                <IconPlus />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                         dark:bg-white dark:text-black dark:hover:opacity-90"
            >
              Add to Cart
            </button>
          </div>
          <button 
            onClick={handleBuyNow}
            className="w-full bg-gray-800 text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                       dark:bg-gray-700 dark:hover:opacity-90"
          >
            Buy Now
          </button>
          <div className="mt-10">
            <AccordionItem title="Fabric & Care">
              <p><strong>Fabric:</strong> {product.fabric}</p>
              <p className="mt-2"><strong>Care:</strong> Dry clean only. Do not bleach. Cool iron.</p>
            </AccordionItem>
            <AccordionItem title="Size Chart">
              <p>Model is 6'1" (185cm) and wears a size Medium.</p>
              <ul className="list-disc pl-5 mt-2">
                <li><strong>S:</strong> Chest 36-38", Waist 30-31"</li>
                <li><strong>M:</strong> Chest 39-41", Waist 32-33"</li>
                <li><strong>L:</strong> Chest 42-44", Waist 34-36"</li>
              </ul>
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              <p>Free express shipping on all orders. Free returns within 30 days. All items must be returned in their original, unworn condition.</p>
            </AccordionItem>
          </div>
        </div>
      </div>
      
      <section className="py-24 mt-16 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-serif text-center mb-12 dark:text-white">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;