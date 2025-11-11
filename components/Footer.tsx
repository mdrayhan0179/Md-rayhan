import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AppContextType } from '../types';
import { IconArrowRight, IconInstagram, IconTwitter } from './icons';

const Footer: React.FC = () => {
  const { navigate } = useContext(AppContext) as AppContextType;
  
  const igImages = [
    "https://picsum.photos/seed/ig1/400/400",
    "https://picsum.photos/seed/ig2/400/400",
    "https://picsum.photos/seed/ig3/400/400",
    "https://picsum.photos/seed/ig4/400/400",
    "https://picsum.photos/seed/ig5/400/400",
    "https://picsum.photos/seed/ig6/400/400",
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900 mt-24 font-sans">
      <div className="max-w-screen-2xl mx-auto px-6 py-16 text-center">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Follow Us</h3>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl lg:text-5xl font-serif transition-opacity duration-300 hover:opacity-60 dark:text-white"
        >
          @LUXEstudios
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-10">
          {igImages.map((imgSrc, i) => (
            <a 
              key={i} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <h4 className="text-xl font-serif mb-4 dark:text-white">Join the Elite</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Be the first to know about new collections, exclusive events, and more.</p>
            <form onSubmit={e => e.preventDefault()} className="flex border border-black dark:border-gray-600">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow p-4 text-sm placeholder-gray-500 focus:outline-none dark:bg-gray-900 dark:text-white"
              />
              <button 
                type="submit"
                className="bg-black text-white p-4 transition-opacity duration-300 hover:opacity-70 dark:bg-white dark:text-black dark:hover:opacity-80"
              >
                <IconArrowRight />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2"></div>
          
          <div className="lg:col-span-2">
            <h5 className="font-bold tracking-wider uppercase text-sm mb-6 dark:text-white">Help</h5>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('orderTracking');}} className="cursor-pointer hover:text-black dark:hover:text-white">Order Tracking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('shippingReturns');}} className="cursor-pointer hover:text-black dark:hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('sizeChart');}} className="cursor-pointer hover:text-black dark:hover:text-white">Size Charts</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('faq');}} className="cursor-pointer hover:text-black dark:hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="font-bold tracking-wider uppercase text-sm mb-6 dark:text-white">Company</h5>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('about');}} className="cursor-pointer hover:text-black dark:hover:text-white">Our Story</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact');}} className="cursor-pointer hover:text-black dark:hover:text-white">Contact Us</a></li>
              <li><a href="#" className="cursor-pointer hover:text-black dark:hover:text-white">Sustainability</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact');}} className="cursor-pointer hover:text-black dark:hover:text-white">Store Locations</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-950">
        <div className="max-w-screen-2xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} LUXE Studios. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Terms of Service</a>
          </div>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" aria-label="Instagram" className="hover:text-black dark:hover:text-white"><IconInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-black dark:hover:text-white"><IconTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;