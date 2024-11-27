// React
import React from 'react';

// Interface
import { IProduct } from "@/interfaces/types"; 

// components
import CardList from '../cardList';
import AddToCart from '../addToCart';

const ProductDetail: React.FC<IProduct> = (product) => {
    return (
        <div>
            {/* Detalles del Producto */}
            <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto p-4 sm:p-6 bg-sky-100 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:space-x-6">
                    {/* Imagen del Producto */}
                    <div className="flex-shrink-0 w-full md:w-1/2">
                        <img
                            src={product.image}
                            alt="product image"
                            className="w-3/4 sm:w-full md:w-full h-40 sm:h-48 md:h-64 object-contain rounded-lg mx-auto"
                        />
                    </div>

                    {/* Detalles del Producto */}
                    <div className="mt-4 md:mt-0 md:flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-eden mb-2">{product.name}</h2>
                            <h2 className="text-md sm:text-lg font-semibold text-green-600 mt-2 mb-4">${product.price}</h2>
                            <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
                            <p className="text-gray-600 text-sm font-bold mt-2">
                                Stock: {product.stock}
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de Productos Relacionados */}
            <div className="mt-6">
                <CardList />
            </div>
        </div>
    );
};

export default ProductDetail;

