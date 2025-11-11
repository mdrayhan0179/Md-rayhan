import React, { useState } from 'react';
import { products } from '../../constants';
import ProductCard from '../ProductCard';
import { IconChevronDown } from '../icons';

interface FilterSelectProps {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ name, label, options, value, onChange }) => (
    <div className="relative">
      <select 
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-200 p-3 pr-10 text-sm font-sans rounded-none focus:outline-none focus:border-black
                   dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:border-white"
      >
        <option value="">{label}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-300">
        <IconChevronDown />
      </div>
    </div>
);

const ShopPage: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    color: '',
    price: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  let filteredProducts = products.filter(product => {
    if (filters.category && product.category.toLowerCase() !== filters.category) {
      return false;
    }
    if (filters.size && !product.availableSizes.includes(filters.size.toUpperCase())) {
      return false;
    }
    if (filters.color && product.color.toLowerCase() !== filters.color) {
      return false;
    }
    return true;
  });

  if (filters.price === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filters.price === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="animate-fade-in max-w-screen-2xl mx-auto px-6 py-12">
      <div className="text-center py-16">
        <h1 className="text-5xl font-serif dark:text-white">Shop All</h1>
        <p className="font-sans text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
          Discover the complete collection. Timeless silhouettes and modern essentials, crafted without compromise.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
        <aside className="lg:col-span-1 lg:sticky lg:top-[100px] h-fit">
          <h2 className="font-serif text-2xl mb-6 dark:text-white lg:block hidden">Filters</h2>
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)} 
              className="w-full flex justify-between items-center p-4 border border-gray-300 dark:border-gray-700"
            >
              <span className="font-medium uppercase tracking-wider dark:text-white">Filters</span>
              <span className={`transition-transform duration-300 dark:text-white ${isFilterOpen ? 'rotate-180' : ''}`}>
                <IconChevronDown />
              </span>
            </button>
          </div>
          <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <FilterSelect 
              name="category" 
              label="Category"
              value={filters.category}
              onChange={handleFilterChange}
              options={[
                {value: 'men', label: 'Men'}, 
                {value: 'women', label: 'Women'}, 
                {value: 'children', label: 'Children'},
                {value: 'essentials', label: 'Essentials'},
                {value: 'abaya', label: 'Abaya'}
              ]} 
            />
            <FilterSelect 
              name="size" 
              label="Size"
              value={filters.size}
              onChange={handleFilterChange} 
              options={[
                {value: 's', label: 'Small'}, 
                {value: 'm', label: 'Medium'}, 
                {value: 'l', label: 'Large'},
                {value: 'xl', label: 'X-Large'}
              ]} 
            />
            <FilterSelect 
              name="color" 
              label="Color" 
              value={filters.color}
              onChange={handleFilterChange}
              options={[
                {value: 'black', label: 'Black'}, 
                {value: 'white', label: 'White'}, 
                {value: 'beige', label: 'Beige'}
              ]} 
            />
            <FilterSelect 
              name="price" 
              label="Price (Sort)" 
              value={filters.price}
              onChange={handleFilterChange}
              options={[
                {value: 'low', label: 'Low to High'}, 
                {value: 'high', label: 'High to Low'}
              ]} 
            />
          </div>
        </aside>
        
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center font-sans text-gray-600 dark:text-gray-400 py-20">
              No products match your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
