'use client';

// react
import React from "react";

// components
import CartItem from "../cartItem";

// interfaces
import { IProduct } from "@/interfaces/types";

interface CartListProps {
  products: IProduct[];
  onDelete: (index: number) => void;
}

export const CartList: React.FC<CartListProps> = ({ products, onDelete }) => {
  return (
    <div className="md:col-span-2 bg-sky-100 shadow-md rounded-lg p-6 w-3/4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your products</h2>
      <div className="space-y-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <CartItem
              key={index}
              {...product}
              onDelete={() => onDelete(index)}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">
            <h2 className="text-lg font-medium">There are no products in your cart.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;

  