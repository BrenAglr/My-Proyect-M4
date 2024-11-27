"use client";

// react
import React, { useEffect, useState } from "react";

// components
import CardHome from "../cardHome";

// helpers
import { getProductDB } from "@/api/productsAPI";
import { useIndex } from "@/helpers/navigationbutton";

// interface
import { IProduct } from "@/interfaces/types";

export const CardContainer: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProductDB();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const { currentIndex, handleNext, handlePrev } = useIndex(products.length);

    return (
        <div className="relative overflow-hidden w-full z-10">
            {/* Contenedor de las cards */}
            <div
                className="flex shadow-lg transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {products &&
                    products.map((product: IProduct, index: number) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <CardHome {...product} />
                        </div>
                    ))}
            </div>

            {/* Botones de navegación */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-20 pointer-events-none">
                <button
                    onClick={handlePrev}
                    className="bg-eden text-white p-2 rounded-full pointer-events-auto"
                    disabled={currentIndex === 0}
                >
                    &#8249;
                </button>
                <button
                    onClick={handleNext}
                    className="bg-eden text-white p-2 rounded-full pointer-events-auto"
                    disabled={currentIndex === products.length - 1}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default CardContainer;




