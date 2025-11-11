import React, { useState } from 'react';
import { IconChevronDown } from './icons';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button 
        className="w-full flex justify-between items-center py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-sans font-medium text-sm uppercase tracking-wider dark:text-gray-100">{title}</span>
        <span className={`transition-transform duration-300 dark:text-gray-300 ${isOpen ? 'rotate-180' : ''}`}>
          <IconChevronDown />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-5' : 'max-h-0'}`}
      >
        <div className="prose prose-sm text-gray-600 dark:text-gray-300 max-w-none font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
