import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, SearchIcon, MenuIcon, UserIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CartDrawer from './CartDrawer';
const Header = () => {
  const {
    toggleCart,
    getCartItemCount,
    isCartOpen
  } = useShop();
  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button className="mr-4 md:hidden">
            <MenuIcon size={20} />
          </button>
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            ShopHub
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/#" className="font-medium hover:text-indigo-600 transition-colors">
            Categories
          </Link>
          <Link to="/#" className="font-medium hover:text-indigo-600 transition-colors">
            New Arrivals
          </Link>
          <Link to="/#" className="font-medium hover:text-indigo-600 transition-colors">
            Deals
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <SearchIcon size={18} className="text-gray-500" />
            <input type="text" placeholder="Search products..." className="bg-transparent border-none focus:outline-none ml-2 w-40" />
          </div>
          <button className="hover:text-indigo-600 transition-colors">
            <UserIcon size={20} />
          </button>
          <button className="relative hover:text-indigo-600 transition-colors" onClick={toggleCart}>
            <ShoppingCartIcon size={20} />
            {getCartItemCount() > 0 && <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>}
          </button>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </header>;
};
export default Header;