// React
import React from 'react';

// Interface
import { IProduct } from "@/interfaces/types"; // Asegúrate de tener esta interfaz definida

import CardList from '../cardList';
import AddToCart from '../addToCart';


const ProductDetail: React.FC<IProduct> = (product) => {
    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 bg-sky-100 rounded-lg shadow-md mt-10">
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="flex-shrink-0 w-full md:w-1/2">
                        <img
                            src={product.image}
                            alt="product image"
                            className="w-full h-64 object-contain rounded-lg" // Cambié w-64 a w-full y añadí object-contain
                        />
                    </div>

                    <div className="mt-4 md:mt-0 md:flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-eden mb-2">{product.name}</h2>
                            <h2 className="text-lg font-semibold text-green-600 mt-2 mb-4">${product.price}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <p className="text-gray-600 text-sm font-bold m-2">Stock: {product.stock}</p>
                        </div>

                        <AddToCart product={product}/>
                    </div>
                </div>
            </div>

            <CardList/>
        </div>
    );
};

export default ProductDetail;
