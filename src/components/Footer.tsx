import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-600 text-sm">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2023 ShopHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
              Privacy Policy
            </Link>
            <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
              Terms of Service
            </Link>
            <Link to="/#" className="text-gray-600 hover:text-indigo-600 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;