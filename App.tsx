import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import ProductPage from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import CheckoutPage from './components/pages/CheckoutPage';
import { OrderTrackingPage, ShippingReturnsPage, SizeChartPage, FAQPage } from './components/pages/helperPages';
import { AppContextType, CartItem, Product } from './types';
// Fix: Import the geminiService to be used for image generation
import { generateImage as generateImageFromAPI } from './services/geminiService';

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (error) { /* In case localStorage is disabled */ }
    return 'light';
  });
  // Fix: Add state for AI-generated images and their loading status
  const [generatedImages, setGeneratedImages] = useState<{ [key: string]: string }>({});
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (error) { /* In case localStorage is disabled */ }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  useEffect(() => {
    const timer = setTimeout(() => {
       // setShowNewsletterPopup(true); // Temporarily disabled
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (page: string, productId: number | null = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
  };

  const addToCart = (product: Product, quantity: number = 1, navigateTo: string | null = 'cart') => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Fix: Add function to handle AI image generation
  const generateImage = async (prompt: string, imageId: string) => {
    setLoadingImages(prev => ({ ...prev, [imageId]: true }));
    try {
      const imageUrl = await generateImageFromAPI(prompt);
      setGeneratedImages(prev => ({ ...prev, [imageId]: imageUrl }));
    } catch (error) {
      console.error(`Failed to generate image for ${imageId}:`, error);
      // Fallback or error handling
    } finally {
      setLoadingImages(prev => ({ ...prev, [imageId]: false }));
    }
  };

  const value: AppContextType = {
    currentPage,
    selectedProductId,
    navigate,
    cart,
    addToCart,
    updateQuantity,
    cartSubtotal,
    showNewsletterPopup,
    setShowNewsletterPopup,
    theme,
    toggleTheme,
    // Fix: Provide AI image generation state and function through context
    generatedImages,
    loadingImages,
    generateImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const PageRouter: React.FC = () => {
  const { currentPage } = useContext(AppContext) as AppContextType;

  switch (currentPage) {
    case 'home': return <HomePage />;
    case 'shop': return <ShopPage />;
    case 'product': return <ProductPage />;
    case 'cart': return <CartPage />;
    case 'about': return <AboutPage />;
    case 'contact': return <ContactPage />;
    case 'checkout': return <CheckoutPage />;
    case 'orderTracking': return <OrderTrackingPage />;
    case 'shippingReturns': return <ShippingReturnsPage />;
    case 'sizeChart': return <SizeChartPage />;
    case 'faq': return <FAQPage />;
    default: return <HomePage />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen font-sans">
        <Header />
        <main>
          <PageRouter />
        </main>
        <Footer />
        <NewsletterPopup />
      </div>
    </AppProvider>
  );
}