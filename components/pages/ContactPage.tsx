import React from 'react';
import { IconInstagram, IconTwitter } from '../icons';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif dark:text-white">Get In Touch</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto">
          We're here to help. Whether you have a question about your order, our products, or our brand, we'd love to hear from you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={e => e.preventDefault()} className="space-y-6 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                           dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                           dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                         dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white"
            />
            <textarea 
              placeholder="Your Message..." 
              rows={8}
              className="w-full p-4 text-sm border border-gray-300 focus:outline-none focus:border-black
                         dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-white"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-black text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:opacity-80
                         dark:bg-white dark:text-black dark:hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="font-sans space-y-10 dark:text-white">
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold mb-3 dark:text-gray-100">Customer Service</h4>
            <a href="mailto:care@luxe.com" className="text-lg text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white">care@luxe.com</a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mon - Fri | 9am - 5pm EST</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold mb-3 dark:text-gray-100">Flagship Store</h4>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              121 Mercer Street<br/>
              New York, NY 10012
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold mb-3 dark:text-gray-100">Social</h4>
            <div className="flex space-x-5">
              <a href="#" aria-label="Instagram" className="hover:text-black dark:hover:text-white"><IconInstagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-black dark:hover:text-white"><IconTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
