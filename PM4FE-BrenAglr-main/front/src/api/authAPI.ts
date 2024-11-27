import { ILoginProps, IRegisterProps } from "@/interfaces/types"
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const register = async (userData: IRegisterProps) => {
    try {
        const res = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!res.ok) {
            const errorDetails = await res.json(); 
            console.error("Error details:", errorDetails);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorDetails.message || "An unexpected error occurred",
            });
            throw new Error(errorDetails.message);
        }

        return res.json();
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops... Register went wrong!",
            text: error.message || "Something went wrong.",
        });
        throw new Error(error.message);
    }
};


export const login = async (userData: ILoginProps) => {
    
    try {
        const res = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (!res.ok) {
            const errorDetails = await res.json(); 
            console.error("Error details:", errorDetails);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorDetails.message || "An unexpected error occurred",
            });
            throw new Error(errorDetails.message);
        }

        return res.json();

    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops... Login went wrong!",
            text: error.message || "Something went wrong.",
        });
        throw new Error(error.message);
    }
}; 