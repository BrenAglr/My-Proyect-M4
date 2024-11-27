'use client'

//react
import React from "react";
import { useEffect, useState } from "react";

//helpers
import { validateRegister } from "../../helpers/validateRegister";
import Toast from "@/helpers/swal.helper";

//interfaces
import { IErrorsProps, IRegisterProps } from "@/interfaces/types";

// api
import { register } from "@/api/authAPI";

// next
import { useRouter } from "next/navigation";

export const Register: React.FC = () => {
    const router = useRouter();
    const initialState = {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    };
    const [registerData, setRegisterData] = useState<IRegisterProps>(initialState);
    const [errors, setErrors] = useState<IErrorsProps>(initialState);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const hasErrors = Object.values(errors).some(error => error);
        const hasEmptyFields = !registerData.email || !registerData.password || !registerData.name || !registerData.address || !registerData.phone;
        setIsButtonDisabled(hasErrors || hasEmptyFields);
    }, [errors, registerData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setRegisterData({
            ...registerData,
            [name]: value
        });

        const fieldErrors = validateRegister({ ...registerData, [name]: value });
        setErrors({
            ...errors,
            [name]: fieldErrors[name]
        });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
            await register(registerData);
    
            Toast.fire({
                icon: "success",
                title: "Registered successfully",
            });
    
            router.push("/login");
        } catch (error: any) {
            console.error("Registration error:", error.message);
        }
    };
    

    return (
        <div className="flex justify-center items-center bg-gray-50 min-h-screen">
            <form
                onSubmit={handleOnSubmit}
                className="w-full max-w-xs sm:max-w-sm md:max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8"
            >
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
                    Register to HexagonSTORE
                </h2>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
                    <input
                        type="text"
                        value={registerData.name}
                        name="name"
                        placeholder="YourName"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden text-sm sm:text-base"
                    />
                </div>
                {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name}</p>}

                <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
                    <input
                        type="text"
                        value={registerData.email}
                        name="email"
                        placeholder="user@mail.com"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden text-sm sm:text-base"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>}

                <div className="mt-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium">Address:</label>
                    <input
                        type="text"
                        value={registerData.address}
                        name="address"
                        placeholder="Avenida Siempreviva 742"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden text-sm sm:text-base"
                    />
                </div>
                {errors.address && <p className="text-red-500 text-xs sm:text-sm">{errors.address}</p>}

                <div className="mt-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium">Phone:</label>
                    <input
                        type="text"
                        value={registerData.phone}
                        name="phone"
                        placeholder="2612345678"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden text-sm sm:text-base"
                    />
                </div>
                {errors.phone && <p className="text-red-500 text-xs sm:text-sm">{errors.phone}</p>}

                <div className="mt-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium">Password:</label>
                    <input
                        type="password"
                        value={registerData.password}
                        name="password"
                        placeholder="*********"
                        onChange={handleInputChange}
                        className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-eden text-sm sm:text-base"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-xs sm:text-sm">{errors.password}</p>}

                <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className="w-full py-2 sm:py-3 mt-4 mb-6 bg-janna text-bondiblue rounded-lg font-semibold hover:bg-pinkish hover:text-janna focus:outline-none focus:ring-2 focus:ring-eden focus:ring-opacity-50 disabled:opacity-50 text-sm sm:text-base"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Register;