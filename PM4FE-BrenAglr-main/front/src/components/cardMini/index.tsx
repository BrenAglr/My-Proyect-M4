// react
import React from "react";

// interfaces
import { IProduct } from "@/interfaces/types";

export const CardMini: React.FC<IProduct> = ({ name, price, image }) => {
    return (
        <div className="flex flex-col items-center border border-gray-300 rounded-lg p-2 bg-sky-100 shadow-md min-w-[180px] h-64 mx-2 mb-4">
            <img src={image} alt="product image" className="w-full h-32 object-contain rounded-md" />
            <div className="flex flex-col justify-end h-full w-full p-2">
                <h2 className="text-sm font-bold">{name}</h2>
                <h2 className="text-sm font-semibold text-green-600">${price}</h2>
            </div>
        </div>
    );
};


export default CardMini;




