import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { AppContextType } from '../types';
import {
  IconMenu, IconShoppingBag, IconSearch, IconUser, IconX, IconMoon, IconSun
} from './icons';

const Header: React.FC = () => {
  const { navigate, cart, theme, toggleTheme } = useContext(AppContext) as AppContextType;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Shop All', page: 'shop' },
    { name: 'Men', page: 'shop' },
    { name: 'Women', page: 'shop' },
    { name: 'Children', page: 'shop' },
    { name: 'Essentials', page: 'shop' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  const renderNavLinks = (isMobile = false) => (
    <nav className={`flex ${isMobile ? 'flex-col space-y-6 text-xl' : 'space-x-8 items-center'}`}>
      {navLinks.map(link => (
        <a
          key={link.name}
          onClick={(e) => {
            e.preventDefault();
            navigate(link.page);
            if (isMobile) setIsMobileMenuOpen(false);
          }}
          href="#"
          className="cursor-pointer uppercase tracking-wider text-sm font-sans font-medium transition-opacity duration-300 hover:opacity-60 dark:text-white"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <div className="bg-black text-white text-center p-3 text-xs tracking-wider uppercase font-sans">
        Global Shipping | Free returns on all orders
      </div>

      <header className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 bg-white/95 shadow-sm backdrop-blur-md dark:bg-black/90' : 'relative bg-white dark:bg-black'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className="dark:text-white">
              <IconMenu />
            </button>
          </div>

          <div className="hidden lg:block lg:w-1/3">
            {renderNavLinks()}
          </div>

          <div className="flex-1 lg:w-1/3 flex justify-center lg:justify-center">
            <a
              onClick={(e) => { e.preventDefault(); navigate('home'); }}
              href="#"
              className="cursor-pointer text-3xl font-black font-serif tracking-tight dark:text-white"
            >
              LUXE
            </a>
          </div>

          <div className="lg:w-1/3 flex justify-end items-center space-x-5 dark:text-white">
            <button 
              onClick={toggleTheme} 
              className="transition-opacity duration-300 hover:opacity-60" 
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </button>
            <button className="hidden lg:block transition-opacity duration-300 hover:opacity-60" aria-label="Search">
              <IconSearch />
            </button>
            <button className="hidden lg:block transition-opacity duration-300 hover:opacity-60" aria-label="Account">
              <IconUser />
            </button>
            <button
              onClick={() => navigate('cart')}
              className="relative transition-opacity duration-300 hover:opacity-60"
              aria-label="Cart"
            >
              <IconShoppingBag />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white dark:bg-white dark:text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-[100] p-6 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <a
              onClick={(e) => { e.preventDefault(); navigate('home'); }}
              href="#"
              className="cursor-pointer text-3xl font-black font-serif tracking-tight dark:text-white"
            >
              LUXE
            </a>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="dark:text-white">
              <IconX />
            </button>
          </div>
          {renderNavLinks(true)}
          <div className="mt-auto flex space-x-6 dark:text-white">
            <button className="transition-opacity duration-300 hover:opacity-60" aria-label="Search">
              <IconSearch />
            </button>
            <button className="transition-opacity duration-300 hover:opacity-60" aria-label="Account">
              <IconUser />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
