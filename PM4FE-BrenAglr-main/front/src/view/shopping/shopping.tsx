//react
import React from "react";

// components
import CartContainer from "@/components/cartContainer";
import CardList from "@/components/cardList";


export const Shopping: React.FC = () => {
    return (
    <div className="bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-eden mb-8">Your Cart</h1>
        <CartContainer/>
        <div className="pt-6">
        <h3 className="text-2xl font-bold text-eden mb-8">
            Something else?
        </h3>
        <CardList/>
        </div>
    </div>
    );
  }

export default Shopping;    

