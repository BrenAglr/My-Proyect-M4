import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const createOrder = async (products: number[], token:string) => {
   
    try {
        const res = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({products})
        })

        if(res.ok) {
            return res.json()
        } else {
            const errorDetails = await res.text(); 
            console.error("Error details:", errorDetails);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "We couldn't safe your order!",
            });
        }

    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "We couldn't complete your order!",
        });
        throw new Error(error)
    }
}; 

export const getOrders = async (token:string) => {
   
    try {
        const res = await fetch(`${API_URL}/users/orders`, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            }
        })

        if(res.ok) {
            return res.json()
        } else {
            const errorDetails = await res.text(); 
            console.error("Error details:", errorDetails);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "We couldn't bring your orders",
            });
        }

    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server error",
        });
        throw new Error(error)
    }
}; 