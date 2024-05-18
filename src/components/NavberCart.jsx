import React, { useState } from 'react';
import { useCart } from '../components/CartFunction';
import { FaCartPlus } from 'react-icons/fa';

const NavbarCart = () => {
  const { getTotalQuantity, cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    decreaseQuantity(productId);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };


  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += parseFloat(item.price) * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="sm:pr-10 pr-5 top-6 relative">
      <div>
      <FaCartPlus className="text-2xl text-gray-800 cursor-pointer" onClick={handleToggleCart} />
      </div>

      <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute bottom-4 sm:right-8 right-3 flex items-center justify-center">
        {getTotalQuantity()}
      </div>
      

      {isCartOpen && (
        <div className="absolute w-[410px] top-12 bg-green-300 text-black rounded-md shadow-md p-2 right-0 w-60 z-10">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center text-xs font-thin mb-2">
              <div>{item.productName} ${item.price}</div>
              <div>
                <button className='text-xl' onClick={() => handleDecrease(item.id)}>-</button>
                <span className='text-xl'>{item.quantity}</span>
                <button className='text-xl' onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <button className='text-red-500 font-xl' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          
          <div className="flex justify-between mt-2">
            <span className='font-xl font-serif font-semibold'>Total:</span>
            <span className='font-xl font-semibold'>${getTotalPrice()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarCart;
