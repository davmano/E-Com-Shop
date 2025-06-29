import React, { useEffect, useState, createContext, useContext } from 'react';
// Sample product data
const products = [{
  id: 1,
  name: 'Modern Leather Backpack',
  price: 89.99,
  description: 'A stylish and durable leather backpack perfect for everyday use. Features multiple compartments and adjustable straps for comfort.',
  image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'accessories'
}, {
  id: 2,
  name: 'Wireless Noise-Cancelling Headphones',
  price: 249.99,
  description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal clear sound quality.',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'electronics'
}, {
  id: 3,
  name: 'Minimalist Analog Watch',
  price: 129.99,
  description: 'Classic analog watch with a minimalist design. Features a genuine leather strap and water-resistant stainless steel case.',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'accessories'
}, {
  id: 4,
  name: 'Organic Cotton T-Shirt',
  price: 34.99,
  description: 'Soft and comfortable t-shirt made from 100% organic cotton. Sustainable and eco-friendly choice for everyday wear.',
  image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'clothing'
}, {
  id: 5,
  name: 'Smart Fitness Tracker',
  price: 149.99,
  description: 'Advanced fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications. Waterproof and long battery life.',
  image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'electronics'
}, {
  id: 6,
  name: 'Ceramic Coffee Mug Set',
  price: 39.99,
  description: 'Set of 4 handcrafted ceramic coffee mugs. Microwave and dishwasher safe with a comfortable handle design.',
  image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  category: 'home'
}];
type CartItem = {
  id: number;
  quantity: number;
};
type ShopContextType = {
  products: typeof products;
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleCart: () => void;
  getCartTotal: () => number;
  getProduct: (id: number) => (typeof products)[0] | undefined;
  getCartItemCount: () => number;
};
const ShopContext = createContext<ShopContextType | undefined>(undefined);
export const ShopProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item => item.id === productId ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      } else {
        return [...prevCart, {
          id: productId,
          quantity: 1
        }];
      }
    });
  };
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => prevCart.map(item => item.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };
  const getProduct = (id: number) => {
    return products.find(p => p.id === id);
  };
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  return <ShopContext.Provider value={{
    products,
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    getCartTotal,
    getProduct,
    getCartItemCount
  }}>
      {children}
    </ShopContext.Provider>;
};
export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};