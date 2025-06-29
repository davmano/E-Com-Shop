import React from 'react';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
const ProductGrid = () => {
  const {
    products
  } = useShop();
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} />)}
    </div>;
};
export default ProductGrid;