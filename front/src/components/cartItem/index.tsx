"use client"

// react
import React from "react"

// interfaces
import { IProduct } from "@/interfaces/types"

export const CartItem: React.FC<IProduct & { onDelete: () => void }> = ({ image, name, price, onDelete }) => {
    return (
      <div className="flex items-center border-b border-sinbad py-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt="Producto"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="flex ml-4 flex-grow">
          <h3 className="text-gray-800 font-medium w-1/2">{name}</h3>
          <p className="text-gray-800 text-sm w-1/2">${price}</p>
        </div>
  
        <button
          className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          title="Eliminar producto"
          onClick={onDelete}
        >
          🗑️
        </button>
      </div>
    );
  };

  export default CartItem
  