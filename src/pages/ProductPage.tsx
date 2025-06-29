import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRightIcon, StarIcon, ShoppingCartIcon, HeartIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductGrid from '../components/ProductGrid';
const ProductPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const {
    getProduct,
    addToCart
  } = useShop();
  const [quantity, setQuantity] = useState(1);
  const product = getProduct(Number(id));
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800">
          Return to homepage
        </Link>
      </div>;
  }
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
  };
  return <div className="bg-white">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center space-x-1 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <ChevronRightIcon size={16} className="text-gray-400" />
          </li>
          <li>
            <Link to="/#" className="text-gray-500 hover:text-indigo-600">
              {product.category}
            </Link>
          </li>
          <li>
            <ChevronRightIcon size={16} className="text-gray-400" />
          </li>
          <li className="text-gray-900 font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      {/* Product Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center" style={{
            maxHeight: '500px'
          }} />
          </div>
          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="ml-2 text-gray-600 text-sm">128 reviews</span>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-2 text-green-600">In Stock</span>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center border rounded-md">
                  <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="px-3 py-1 hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-3">{quantity}</span>
                  <button onClick={() => setQuantity(prev => prev + 1)} className="px-3 py-1 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <button onClick={handleAddToCart} className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none">
                <ShoppingCartIcon size={20} className="mr-2" />
                Add to Cart
              </button>
              <button className="flex items-center justify-center rounded-md py-3 px-3 border border-gray-300 hover:bg-gray-50">
                <HeartIcon size={20} className="text-gray-400" />
              </button>
            </div>
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Free shipping
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Orders over $50 qualify for free shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <ProductGrid />
        </div>
      </section>
    </div>;
};
export default ProductPage;