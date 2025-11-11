import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../App';
import { countries } from '../../constants';
import { AppContextType } from '../../types';
import { IconChevronDown, IconMastercard, IconPayPal, IconVisa } from '../icons';

const CheckoutPage: React.FC = () => {
    const { cart, cartSubtotal, navigate } = useContext(AppContext) as AppContextType;
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [shippingCost, setShippingCost] = useState(25.00);
    
    const [formData, setFormData] = useState({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      country: '',
      zip: '',
      phone: '',
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [id]: value,
      }));
    };
  
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'country', 'zip'];
    const isFormValid = requiredFields.every(field => formData[field as keyof typeof formData] && formData[field as keyof typeof formData].trim() !== '');
  
    useEffect(() => {
      if (cart.length === 0) {
        navigate('home');
      }
    }, [cart, navigate]);
  
    if (cart.length === 0) {
      return null;
    }
  
    const Input = ({ id, placeholder, type = 'text', className = ''}: { id: string, placeholder: string, type?: string, className?: string}) => (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={formData[id as keyof typeof formData]}
        onChange={handleInputChange}
        className={`w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                    dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white ${className}`}
      />
    );
    
    const Select = ({ id, children, className = '' }: {id: string, children: React.ReactNode, className?: string}) => (
       <select
        id={id}
        value={formData[id as keyof typeof formData]}
        onChange={handleInputChange}
        className={`w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black appearance-none pr-10
                    dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white ${className}`}
      >
        {children}
      </select>
    );
  
    return (
      <div className="animate-fade-in max-w-screen-xl mx-auto px-6 py-16 font-sans">
        <h1 className="text-4xl font-serif text-center mb-12 dark:text-white">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-xl font-serif mb-6 dark:text-white">Contact Information</h2>
              <Input id="email" placeholder="Email Address" type="email" />
            </section>
  
            <section>
              <h2 className="text-xl font-serif mb-6 dark:text-white">Shipping Address</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input id="firstName" placeholder="First Name" />
                  <Input id="lastName" placeholder="Last Name" />
                </div>
                <Input id="address" placeholder="Address" />
                <Input id="apartment" placeholder="Apartment, suite, etc. (optional)" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Input id="city" placeholder="City" />
                  <div className="relative">
                    <Select id="country">
                      <option value="">Country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </Select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-300">
                      <IconChevronDown />
                    </div>
                  </div>
                  <Input id="zip" placeholder="ZIP / Postal Code" />
                </div>
                <Input id="phone" placeholder="Phone (for shipping updates)" type="tel" />
              </div>
            </section>
  
            <section>
              <h2 className="text-xl font-serif mb-6 dark:text-white">Shipping Method</h2>
              <div className="space-y-4">
                <label className={`flex items-center justify-between p-5 border cursor-pointer
                                  ${shippingCost === 0 ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <div className="flex items-center">
                    <input type="radio" name="shippingMethod" value={0} checked={shippingCost === 0} onChange={() => setShippingCost(0)} className="h-5 w-5 text-black focus:ring-black border-gray-300" />
                    <div className="ml-4"><span className="font-medium dark:text-white">Standard Shipping</span><p className="text-sm text-gray-600 dark:text-gray-400">5-7 Business Days</p></div>
                  </div>
                  <span className="font-medium dark:text-white">Free</span>
                </label>
                <label className={`flex items-center justify-between p-5 border cursor-pointer
                                  ${shippingCost === 25.00 ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <div className="flex items-center">
                    <input type="radio" name="shippingMethod" value={25.00} checked={shippingCost === 25.00} onChange={() => setShippingCost(25.00)} className="h-5 w-5 text-black focus:ring-black border-gray-300"/>
                    <div className="ml-4"><span className="font-medium dark:text-white">Express Shipping</span><p className="text-sm text-gray-600 dark:text-gray-400">1-3 Business Days</p></div>
                  </div>
                  <span className="font-medium dark:text-white">$25.00</span>
                </label>
              </div>
            </section>
  
            <section>
              <h2 className="text-xl font-serif mb-6 dark:text-white">Payment Method</h2>
              <div className="space-y-4">
                <div className={`border transition-all duration-200 ${paymentMethod === 'card' ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <label className="flex items-center justify-between p-5 cursor-pointer">
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="h-5 w-5 text-black focus:ring-black border-gray-300"/>
                      <span className="ml-4 font-medium dark:text-white">Credit Card</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"><IconVisa /><IconMastercard /></div>
                  </label>
                  {paymentMethod === 'card' && (
                    <div className="p-5 border-t border-gray-200 dark:border-gray-700 space-y-4 bg-white dark:bg-gray-800">
                      <input id="card-number" placeholder="Card Number" className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-white" />
                      <div className="grid grid-cols-2 gap-4">
                        <input id="expiry" placeholder="MM / YY" className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-white" />
                        <input id="cvc" placeholder="CVC" className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className={`border transition-all duration-200 ${paymentMethod === 'paypal' ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-900' : 'border-gray-300 dark:border-gray-700'}`}>
                  <label className="flex items-center justify-between p-5 cursor-pointer">
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="h-5 w-5 text-black focus:ring-black border-gray-300"/>
                      <span className="ml-4 font-medium dark:text-white">PayPal</span>
                    </div>
                    <div className="text-blue-900 dark:text-blue-300"><IconPayPal /></div>
                  </label>
                </div>
              </div>
            </section>
            
            <button disabled={!isFormValid} className="w-full bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-5 px-6 mt-10 transition-all duration-300 hover:opacity-80 dark:bg-white dark:text-black dark:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
              Place Order
            </button>
  
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-950 p-8 sticky top-32">
              <h2 className="text-2xl font-serif mb-6 dark:text-white">Order Summary</h2>
              <div className="space-y-5 max-h-60 overflow-y-auto border-b border-gray-200 dark:border-gray-700 pb-5">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <div className="relative w-20 h-24 bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover"/>
                      <span className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{item.quantity}</span>
                    </div>
                    <div className="flex-grow"><p className="font-medium text-sm dark:text-white">{item.product.name}</p><p className="text-sm text-gray-600 dark:text-gray-400">Size: M (Demo)</p></div>
                    <p className="font-medium text-sm dark:text-white">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 font-sans text-gray-700 dark:text-gray-300 pt-6">
                <div className="flex justify-between"><p>Subtotal</p><p className="font-medium text-black dark:text-white">${cartSubtotal.toFixed(2)}</p></div>
                <div className="flex justify-between"><p>Shipping</p><p className="font-medium text-black dark:text-white">{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</p></div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 flex justify-between"><p className="text-lg font-medium dark:text-gray-100">Total</p><p className="text-lg font-bold text-black dark:text-white">${(cartSubtotal + shippingCost).toFixed(2)}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CheckoutPage;