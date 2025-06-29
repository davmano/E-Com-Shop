import React from 'react';
import { XIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CartItem from './CartItem';
type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose
}) => {
  const {
    cart,
    getCartTotal
  } = useShop();
  return <div className={`fixed inset-0 overflow-hidden z-20 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className={`w-screen max-w-md transform transition ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shopping cart
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button onClick={onClose} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                      <XIcon size={20} />
                    </button>
                  </div>
                </div>
                <div className="mt-8">
                  {cart.length === 0 ? <div className="text-center py-12">
                      <p className="text-gray-500">Your cart is empty</p>
                    </div> : <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map(item => <li key={item.id} className="py-6">
                            <CartItem id={item.id} quantity={item.quantity} />
                          </li>)}
                      </ul>
                    </div>}
                </div>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${getCartTotal().toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button className={`w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={cart.length === 0}>
                    Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" onClick={onClose}>
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CartDrawer;