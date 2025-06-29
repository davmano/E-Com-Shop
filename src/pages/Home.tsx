import React from 'react';
import ProductGrid from '../components/ProductGrid';
const Home = () => {
  return <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Summer Collection 2023
            </h1>
            <p className="text-lg mb-6 text-indigo-100">
              Discover our latest arrivals and trending products at unbeatable
              prices.
            </p>
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Summer Collection" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Clothing', 'Accessories', 'Home'].map(category => <div key={category} className="relative group overflow-hidden rounded-lg">
                  <img src={`https://source.unsplash.com/random/300x300/?${category.toLowerCase()}`} alt={category} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-medium">
                      {category}
                    </h3>
                  </div>
                </div>)}
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Handpicked by our experts
          </p>
          <ProductGrid />
        </div>
      </section>
      {/* Promotional Banner */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-indigo-600 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get 20% Off Your First Order
                </h2>
                <p className="text-indigo-100 mb-6">
                  Sign up for our newsletter and receive a discount code
                  instantly.
                </p>
                <div className="flex flex-col sm:flex-row">
                  <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-md mb-2 sm:mb-0 sm:mr-2 flex-grow" />
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Special offer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;