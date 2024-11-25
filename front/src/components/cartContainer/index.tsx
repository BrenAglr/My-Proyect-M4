"use client"

import { IProduct, IUserData } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import CartList from "../cartList";
import CartOrder from "../cartOrder";
import Cookies from "js-cookie";
import { createOrder } from "@/api/orderAPI";
import Toast from "@/helpers/swal.helper";
import { useRouter } from "next/navigation";

export const CartContainer: React.FC = () => {
    const router = useRouter()
    const [products, setProducts] = useState<IProduct[]>([]);
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {
        const token = Cookies.get("userData");
        
        if (token) {
            const data = JSON.parse(token);
            setUserData(data); 
        }
        
        const storedProducts = JSON.parse(localStorage.getItem("cart") || "[]");
            setProducts(storedProducts);
        }, []);

      
  
        const handleDelete = (index: number): void => {
            const updatedProducts = products.filter((_, i) => i !== index);
            setProducts(updatedProducts);
            localStorage.setItem("cart", JSON.stringify(updatedProducts));
        };
        const handleBuy = async () => {
            if (!userData?.token) return
            const productsId: number[] = products?.map((product) => product.id)
                const response = await  createOrder(productsId, userData.token)

                localStorage.removeItem("cart")

                Toast.fire({
                    icon: "success",
                    title: "Purchase completed successfully."
                });

                router.push("/")
                console.log(response);
            }

    return (
        <div className="flex flex-col md:flex-row gap-6">
        <CartList products={products} onDelete={handleDelete} />
        <CartOrder products={products} handleBuy={handleBuy}/>
      </div>
    )
}

export default CartContainer