'use client';

// react
import React from "react";

// interfaces
import { IProduct } from "@/interfaces/types";

interface CartOrderProps {
  products: IProduct[];
  handleBuy: () => void
}

export const CartOrder: React.FC<CartOrderProps> = ({ products, handleBuy}) => {

  const subPrice = products.reduce((sum, product) => sum + product.price, 0);
  const shippingPrice = 10
  const taxPrice = Math.round((subPrice + shippingPrice)*21)/100;
  const totalPrice= subPrice + shippingPrice + taxPrice; 

  return (
    <div className="bg-sky-100 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col h-full gap-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between items-center text-gray-700 text-lg">
          <span>Subtotal:</span>
          <span className="">${subPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 text-lg">
          <span>Shipping:</span>
          <span className="">${shippingPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 text-lg border-b border-sinbad">
          <span>Taxes:</span>
          <span className="">${taxPrice.toFixed(2)}</span>
        </div>
        <br />
        <div className="flex justify-between items-center text-gray-700 text-lg">
          <span>Total:</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button 
            className="mt-auto w-full bg-janna shadow-md shadow-slate-300  text-bondiblue py-2 rounded-lg font-semibold hover:bg-pinkish hover:text-janna hover:shadow-lg hover:shadow-pink-400 transition disabled:opacity-25"
            onClick={handleBuy}
            disabled={products.length === 0}>
        Buy now
      </button>
    </div>
  );
};

export default CartOrder;
