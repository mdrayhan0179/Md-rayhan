export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  fabric: string;
  details: string;
  images: string[];
  availableSizes: string[];
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AppContextType {
  currentPage: string;
  selectedProductId: number | null;
  navigate: (page: string, productId?: number | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, navigateTo?: string | null) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  cartSubtotal: number;
  showNewsletterPopup: boolean;
  setShowNewsletterPopup: (show: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  // Fix: Add properties for AI image generation to resolve errors in ImageWithAI.tsx
  generatedImages: { [key: string]: string };
  loadingImages: { [key: string]: boolean };
  generateImage: (prompt: string, imageId: string) => Promise<void>;
}