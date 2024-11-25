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
        <div className="overflow-hidden w-full">
            <div
                className="flex shadow-lg transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {products &&
                    products.map((product: IProduct) => (
                        <div className="w-full flex-shrink-0">
                                <CardHome
                                    {...product} />
                        </div>
                    ))}
            </div>

            <div className="absolute top-1/3 transform -translate-y-1/2 w-full flex justify-between px-4 sm:top-72">
                <button
                    onClick={handlePrev}
                    className="bg-eden text-white p-2 rounded-full"
                    disabled={currentIndex === 0}
                >
                    &#8249;
                </button>
                <button
                    onClick={handleNext}
                    className="bg-eden text-white p-2 rounded-full"
                    disabled={currentIndex === products.length - 1}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default CardContainer;



