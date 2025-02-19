"use client"
// react
import React, { useEffect, useState } from "react";

// interfaces
import { IProduct, IUserData } from "@/interfaces/types"

// next
import { useRouter } from "next/navigation";

// cookies
import Cookies from "js-cookie";

// helpers
import Toast from "@/helpers/swal.helper";

// sweet alert
import Swal from "sweetalert2";

interface IAddToCartProps {
    product: IProduct;
}

export const AddToCart: React.FC<IAddToCartProps> = ({product}) => {
    const [userData, setUserData] = useState<IUserData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("userData");
        
        if (token) {
          const data = JSON.parse(token);
          setUserData(data); 
          
        }
      }, []);

      const handleAdd = (): void => {
        if (userData) {
                const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                Toast.fire({
                    icon: "success",
                    title: "Added to cart"
                  });
                router.push("/shopping")
      } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-cancel"
            },
            buttonsStyling: true
          });
          swalWithBootstrapButtons.fire({
            title: "Oops...",
            text: "You need to log in to add items to the cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Log in",
            cancelButtonText: "Register",
            reverseButtons: false
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/login")
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              router.push("/register")
            }
          });
      }
    }
    return (
        <button className=" border border-gray-300 rounded-xl shadow-md bg-rose-500 mt-16 w-40 text-sky-100 hover:bg-rose-700"
            onClick={handleAdd}>
                Add to cart
        </button>
    )
}

export default AddToCart