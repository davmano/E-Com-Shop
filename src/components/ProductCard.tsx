import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category
}) => {
  const {
    addToCart
  } = useShop();
  return <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
          {category}
        </span>
        <Link to={`/product/${id}`} className="block">
          <h3 className="mt-1 font-medium text-gray-900 hover:text-indigo-600 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-900 font-bold">${price.toFixed(2)}</span>
          <button onClick={() => addToCart(id)} className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-8 w-8 transition-colors" aria-label="Add to cart">
            <ShoppingCartIcon size={16} />
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;