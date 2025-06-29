import React from 'react';
import { Trash2Icon, MinusIcon, PlusIcon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem: React.FC<CartItemProps> = ({
  id,
  quantity
}) => {
  const {
    getProduct,
    updateQuantity,
    removeFromCart
  } = useShop();
  const product = getProduct(id);
  if (!product) return null;
  return <div className="flex py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
          <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md">
            <button onClick={() => updateQuantity(id, quantity - 1)} className="px-2 py-1 hover:bg-gray-100">
              <MinusIcon size={16} />
            </button>
            <span className="px-2">{quantity}</span>
            <button onClick={() => updateQuantity(id, quantity + 1)} className="px-2 py-1 hover:bg-gray-100">
              <PlusIcon size={16} />
            </button>
          </div>
          <button onClick={() => removeFromCart(id)} className="text-red-500 hover:text-red-700">
            <Trash2Icon size={18} />
          </button>
        </div>
      </div>
    </div>;
};
export default CartItem;