import React, { useContext } from 'react';
import { AppContext } from '../App';
import { AppContextType } from '../types';
import { IconX } from './icons';

const NewsletterPopup: React.FC = () => {
  const { showNewsletterPopup, setShowNewsletterPopup } = useContext(AppContext) as AppContextType;
  
  if (!showNewsletterPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-6">
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-lg p-10 text-center animate-fade-in">
        <button 
          onClick={() => setShowNewsletterPopup(false)} 
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          aria-label="Close popup"
        >
          <IconX />
        </button>
        
        <h3 className="text-3xl font-serif mb-4 dark:text-white">Join The List</h3>
        <p className="font-sans text-gray-600 dark:text-gray-300 mb-8">
          Sign up for 10% off your first order and be the first to know about new collections.
        </p>
        
        <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                       dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white"
          />
          <button 
            type="submit"
            className="w-full bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                       dark:bg-white dark:text-black dark:hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
        
        <p 
          onClick={() => setShowNewsletterPopup(false)}
          className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-6 cursor-pointer hover:text-black dark:hover:text-white"
        >
          No, thanks
        </p>
      </div>
    </div>
  );
};

export default NewsletterPopup;
