import React from 'react';
import AccordionItem from '../AccordionItem';

const PageInput = ({ id, placeholder, type = 'text', className = '' }: { id: string, placeholder: string, type?: string, className?: string}) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    className={`w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white ${className}`}
  />
);

export const OrderTrackingPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-2xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif dark:text-white">Track Your Order</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto">
          Enter your order details below to check the status of your shipment.
        </p>
      </div>
      <form onSubmit={e => e.preventDefault()} className="space-y-6 font-sans">
        <PageInput id="orderId" placeholder="Order ID" />
        <PageInput id="email" placeholder="Billing Email Address" type="email" />
        <button 
          type="submit"
          className="w-full bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                     dark:bg-white dark:text-black dark:hover:opacity-90"
        >
          Track Order
        </button>
      </form>
    </div>
  );
};

export const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="relative h-[50vh] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-center p-6">
        <div className="relative z-10">
          <h1 className="text-6xl lg:text-7xl font-serif text-black dark:text-white">
            Shipping & Returns
          </h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-gray-700 dark:text-gray-300 font-sans space-y-6">
          <h2 className="font-serif text-4xl dark:text-white">Shipping Policy</h2>
          <p>
            We offer complimentary standard shipping on all orders. Express shipping is available for a flat rate of $25.00.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard Shipping:</strong> 5-7 business days. (Free)</li>
            <li><strong>Express Shipping:</strong> 1-3 business days. ($25.00)</li>
          </ul>
          <p>
            Orders are processed within 24-48 hours, Monday through Friday, excluding holidays. Please note that we do not ship to P.O. boxes.
          </p>
          
          <h2 className="font-serif pt-10 text-4xl dark:text-white">Return Policy</h2>
          <p>
            We accept returns within 30 days of the delivery date. Items must be returned in their original, unworn, unwashed, and undamaged condition, with all original tags attached.
          </p>
          <p>
            To initiate a return, please visit our online portal or contact customer service at <a href="mailto:care@luxe.com" className="underline hover:text-black dark:hover:text-white">care@luxe.com</a>.
          </p>
          <p>
            Refunds will be processed to the original form of payment within 5-7 business days after we receive and inspect the returned item.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SizeChartPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif dark:text-white">Size Charts</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto">
          Find your perfect fit. Measurements are shown in inches.
        </p>
      </div>
      
      <h2 className="font-serif text-3xl mb-6 dark:text-white">Men's Tops</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Size</th>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Chest (in)</th>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Waist (in)</th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            <tr className="border-b dark:border-gray-800"><td className="p-4">S</td><td className="p-4">36-38</td><td className="p-4">30-31</td></tr>
            <tr className="border-b dark:border-gray-800"><td className="p-4">M</td><td className="p-4">39-41</td><td className="p-4">32-33</td></tr>
            <tr className="border-b dark:border-gray-800"><td className="p-4">L</td><td className="p-4">42-44</td><td className="p-4">34-36</td></tr>
            <tr className="border-b dark:border-gray-800"><td className="p-4">XL</td><td className="p-4">45-47</td><td className="p-4">37-39</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-serif text-3xl mt-16 mb-6 dark:text-white">Women's Tops</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans border-collapse">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Size</th>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Bust (in)</th>
              <th className="p-4 text-sm font-medium uppercase border-b dark:border-gray-700 dark:text-gray-200">Waist (in)</th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            <tr className="border-b dark:border-gray-800"><td className="p-4">S</td><td className="p-4">33-35</td><td className="p-4">26-27</td></tr>
            <tr className="border-b dark:border-gray-800"><td className="p-4">M</td><td className="p-4">36-38</td><td className="p-4">28-30</td></tr>
            <tr className="border-b dark:border-gray-800"><td className="p-4">L</td><td className="p-4">39-41</td><td className="p-4">31-33</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const FAQPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif dark:text-white">FAQs</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto">
          Frequently Asked Questions. We're here to help.
        </p>
      </div>
      
      <div className="space-y-4">
        <AccordionItem title="What is your return policy?">
          <p>We accept returns within 30 days of the delivery date. Items must be returned in their original, unworn, unwashed, and undamaged condition, with all original tags attached.</p>
        </AccordionItem>
        <AccordionItem title="How do I track my order?">
          <p>Once your order has shipped, you will receive a confirmation email with a tracking number. You can also use the "Order Tracking" page on our website by entering your order ID and billing email.</p>
        </AccordionItem>
        <AccordionItem title="What shipping options do you offer?">
          <p>We offer complimentary Standard Shipping (5-7 business days) and paid Express Shipping (1-3 business days) for a flat rate of $25.00.</p>
        </AccordionItem>
        <AccordionItem title="Do you ship internationally?">
          <p>Yes, we ship globally to most countries. You can select your country during the checkout process. Shipping times and rates may vary based on the destination.</p>
        </AccordionItem>
      </div>
    </div>
  );
};
