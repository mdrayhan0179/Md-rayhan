import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { products } from '../../constants';
import { AppContextType } from '../../types';
import ProductCard from '../ProductCard';

const CategoryCard: React.FC<{ title: string; imageUrl: string; onClick: () => void }> = ({ title, imageUrl, onClick }) => (
    <div className="relative group overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
      <div className="absolute bottom-10 left-10">
        <h3 className="text-white text-3xl font-serif">{title}</h3>
        <div 
          className="inline-block text-white font-sans font-medium uppercase tracking-wider text-sm mt-3 pb-1
                      relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white
                      after:transition-all after:duration-300 group-hover:after:w-full"
        >
          Shop Now
        </div>
      </div>
    </div>
  );
  
  const TrustFeature: React.FC<{ title: string; text: string }> = ({ title, text }) => (
    <div className="font-sans">
      <h4 className="font-medium tracking-wider uppercase mb-3 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );

const HomePage: React.FC = () => {
    const { navigate } = useContext(AppContext) as AppContextType;
    const featuredProducts = products.slice(0, 4);
    const newArrivals = products.length > 6 ? products.slice(2, 6) : products.slice(0, 4);
    
    const heroImageUrl = "https://picsum.photos/seed/hero/1920/1080";
    
    return (
      <div className="animate-fade-in">
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white bg-black">
          <div className="absolute inset-0 opacity-40">
            <img
              src={heroImageUrl}
              alt="Luxury campaign"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center p-6">
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">
              Modern Élite
            </h1>
            <p className="text-lg md:text-xl font-sans tracking-wide uppercase mb-10">
              The Fall '25 Collection
            </p>
            <button 
              onClick={() => navigate('shop')}
              className="bg-white text-black font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:bg-gray-200"
            >
              Shop Now
            </button>
          </div>
        </section>
        
        <section className="py-20 px-6 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Men" 
              imageUrl="https://picsum.photos/seed/cat_men/800/1200"
              onClick={() => navigate('shop')}
            />
            <CategoryCard 
              title="Women" 
              imageUrl="https://picsum.photos/seed/cat_women/800/1200"
              onClick={() => navigate('shop')}
            />
            <CategoryCard 
              title="Children" 
              imageUrl="https://picsum.photos/seed/cat_child/800/1200"
              onClick={() => navigate('shop')}
            />
            <CategoryCard 
              title="Essentials" 
              imageUrl="https://picsum.photos/seed/cat_essent/800/1200"
              onClick={() => navigate('shop')}
            />
          </div>
        </section>
  
        <section className="py-16 px-6 max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 dark:text-white">Featured Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section className="h-[70vh] bg-gray-100 dark:bg-gray-800 my-20 flex items-center justify-center">
           <div className="text-center p-6">
              <div className="w-24 h-24 rounded-full bg-black/50 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5"><path d="M8 5v14l11-7z"></path></svg>
              </div>
              <h2 className="text-4xl lg:text-6xl font-serif font-medium text-black dark:text-white mb-4">
                The Art of Silhouette
              </h2>
              <p className="font-sans text-gray-700 dark:text-gray-300 uppercase tracking-widest text-sm">
                Watch The Campaign Film
              </p>
            </div>
        </section>
        
        <section className="py-16 px-6 max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 dark:text-white">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('shop')}
              className="border border-black dark:border-white text-black dark:text-white font-sans font-medium uppercase tracking-wider text-sm py-4 px-12 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Shop All
            </button>
          </div>
        </section>
        
        <section className="bg-gray-50 dark:bg-gray-950 py-16 mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <TrustFeature 
              title="Global Shipping" 
              text="Complimentary shipping on all orders."
            />
            <TrustFeature 
              title="Premium Fabrics" 
              text="Sourced from the finest mills in Italy and Japan."
            />
            <TrustFeature 
              title="Easy Returns" 
              text="Free, no-hassle returns within 30 days."
            />
          </div>
        </section>
      </div>
    );
  };

  export default HomePage;