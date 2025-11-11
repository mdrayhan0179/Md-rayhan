import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { AppContextType } from '../../types';
import { IconMinus, IconPlus } from '../icons';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, cartSubtotal, navigate } = useContext(AppContext) as AppContextType;

  if (cart.length === 0) {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-serif mb-6 dark:text-white">Your Cart is Empty</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mb-8">
          Discover our collections and find your next signature piece.
        </p>
        <button 
          onClick={() => navigate('shop')}
          className="bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                     dark:bg-white dark:text-black dark:hover:opacity-90"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif text-center mb-12 dark:text-white">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.product.id} className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
              <a 
                onClick={(e) => { e.preventDefault(); navigate('product', item.product.id);}}
                href="#"
                className="w-32 h-40 bg-gray-100 dark:bg-gray-800 flex-shrink-0 cursor-pointer"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="flex-grow text-center md:text-left">
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('product', item.product.id);}}
                  href="#"
                  className="font-serif text-xl cursor-pointer hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                >
                  {item.product.name}
                </a>
                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm mt-1">${item.product.price.toFixed(2)}</p>
              </div>
              <div className="flex border border-gray-300 dark:border-gray-600 items-center flex-shrink-0">
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <IconMinus />
                </button>
                <span className="p-2 w-10 text-center font-medium font-sans dark:text-white">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  aria-label="Increase quantity"
                >
                  <IconPlus />
                </button>
              </div>
              <p className="font-sans font-medium text-lg w-20 text-right dark:text-white">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-950 p-8 sticky top-32">
            <h2 className="text-2xl font-serif mb-6 dark:text-white">Order Summary</h2>
            <div className="space-y-4 font-sans text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="font-medium text-black dark:text-white">${cartSubtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p className="font-medium text-black dark:text-white">Calculated at checkout</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 flex justify-between">
                <p className="text-lg font-medium dark:text-gray-100">Total</p>
                <p className="text-lg font-bold text-black dark:text-white">${cartSubtotal.toFixed(2)}</p>
              </div>
            </div>
            
            <form onSubmit={e => e.preventDefault()} className="flex border border-gray-300 dark:border-gray-600 mt-8 bg-white dark:bg-gray-800">
              <input 
                type="text" 
                placeholder="Discount code" 
                className="flex-grow p-4 text-sm placeholder-gray-500 focus:outline-none dark:text-white"
              />
              <button 
                type="submit"
                className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 text-sm font-medium uppercase transition-opacity duration-300 hover:opacity-70"
              >
                Apply
              </button>
            </form>
            
            <button 
              onClick={() => navigate('checkout')}
              className="w-full bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-6 mt-6 transition-all duration-300 hover:opacity-80
                         dark:bg-white dark:text-black dark:hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;