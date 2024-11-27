// React
import React from "react"

// helpers
import { getProductDB } from "@/api/productsAPI";

// components
import CardMini from "../cardMini";

// interface
import { IProduct } from "@/interfaces/types";

// next
import Link from "next/link";

export const CardList: React.FC = async () => {
    const products = await getProductDB()
    
    return (
        <div className="flex flex-wrap justify-center mt-12">
                { products &&
                    products.map((product: IProduct) => (
                            <Link href={`/product/${product.id}`} key={product.id} passHref>
                                <CardMini
                                    {...product} />
                            </Link>
                    ))
                    }
        </div>)}

export default CardList