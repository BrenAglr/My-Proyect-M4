'use client'

//react
import React from "react";
import { useEffect, useState } from "react";

//helpers
import { validateLogin } from "../../helpers/validateLogin"
import { login } from "@/api/authAPI";
import Toast from "@/helpers/swal.helper";

//interface
import { ILoginProps } from "@/interfaces/types";
import { IErrorsProps } from "@/interfaces/types";

// next
import { useRouter } from "next/navigation";

import  Cookies from "js-cookie";
import Link from "next/link";

export const Login: React.FC = () => {
    const router = useRouter()
    const initialState = {
        email: "",
        password: ""
    }
    const [loginData, setLoginData] = useState<ILoginProps>(initialState);

    const [errors, setErrors] = useState<IErrorsProps>(initialState);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error);
        const hasEmptyFields = !loginData.email || !loginData.password;
        setIsButtonDisabled(hasErrors || hasEmptyFields);
    }, [errors, loginData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setLoginData({
            ...loginData,
            [name]: value
        });

        const fieldErrors = validateLogin({ ...loginData, [name]: value });
        setErrors({
            ...errors,
            [name]: fieldErrors[name]
        });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(loginData)
        const {token, user} = response;
        Cookies.set("userData", JSON.stringify({token, user}))
        
        Toast.fire({
            icon: "success",
            title: "Log in successfully"
          });

        router.push("/")
    };

    return (
        <div className="flex justify-center items-center bg-gray-50">
            <form onSubmit={handleOnSubmit} className="w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-4 mt-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Log in to HexagonSTORE</h2>
                <Link href={"/register"}>
                <div className="text-2xl text-center mb-6 hover:text-eden ">You don't have an account yet, sign up here.
                    </div></Link>
                <div className="mt-12">
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email: </label>
                    <input
                        type="text"
                        value={loginData.email}
                        name="email"
                        placeholder="user@mail.com"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium">Password: </label>
                    <input
                        type="password"
                        value={loginData.password}
                        name="password"
                        placeholder="*********"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                <button type="submit" disabled={isButtonDisabled} className="w-full py-3 mt-4 mb-6 bg-janna text-bondiblue rounded-lg font-semibold hover:bg-pinkish hover:text-janna focus:outline-none focus:ring-2 focus:ring-eden focus:ring-opacity-50 disabled:opacity-50">Sign in</button>
            </form>
        </div>
    );
};

export default Login;