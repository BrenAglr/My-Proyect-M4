import { ILoginProps, IRegisterProps } from "@/interfaces/types"
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const register = async (userData: IRegisterProps) => {
   
    try {
        const res = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if(res.ok) {
            return res.json()
        } else {
            const errorDetails = await res.text(); 
            console.error("Error details:", errorDetails);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Register went wrong!",
            });
        }

    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Register went wrong!",
        });
        throw new Error(error)
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

        if(res.ok) {
            return res.json()
        } else {
            const errorDetails = await res.text(); 
            console.error("Error details:", errorDetails);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login went wrong!"
              });
        }

    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login went wrong!"
          });
          throw new Error(error)
    }
}; 