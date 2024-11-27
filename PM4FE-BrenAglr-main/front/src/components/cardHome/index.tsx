// react
import React from "react";

// interfaces
import { IProduct } from "@/interfaces/types";

// next
import Link from "next/link";

// components
import AddToCart from "../addToCart";

export const CardHome: React.FC<IProduct> = (product) => {
    const limitedDescription =
        product.description.length > 60
            ? product.description.substring(0, 60) + "..."
            : product.description;

    return (
        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-md p-2 sm:p-4 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto bg-sky-100">
            {/* Imagen del producto */}
            <div className="flex-shrink-0 w-3/4 sm:w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <img
                    src={product.image}
                    alt="product image"
                    className="w-full h-40 sm:h-48 md:h-auto object-contain rounded-lg"
                />
            </div>
            {/* Contenido del producto */}
            <div className="flex flex-col justify-between w-full">
                <Link href={`/product/${product.id}`} key={product.id} passHref>
                    <h2 className="text-lg sm:text-xl font-bold text-eden mb-2">{product.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{limitedDescription}</p>
                    <h2 className="text-md sm:text-lg font-semibold text-green-600 mt-2">
                        ${product.price}
                    </h2>
                </Link>
                <div className="mt-2 sm:mt-4">
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
    );
};

export default CardHome;



