import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../components/CartFunction";


const ProductCard = (props) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full relative bg-gray-300 rounded-2xl  group">
      <div className="max-w-80  max-h-80 relative overflow-y-hidden ">
        <div>
          <img className="w-full h-[280px]" src={props.img} />
        </div>
        <div className="w-full h-22 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-serif px-2 border-l border-r">
            
            <li className="hover:text-primeColor text-red-500 text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              <button onClick={() => addToCart(props)}>Add To Cart</button> 
              <span>
                <FaShoppingCart />
              </span>
            </li>

          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-serif">
          <h2 className="text-2xl text-primeColor font-bold">
            {props.productName}
            <p>
            <span className="text-2xl text-yellow-500">{props.ratting}</span>
           </p> 
          </h2>
         
          <p className="text-black text-[18px]">${props.price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
