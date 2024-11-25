"use client";

//react
import React, { useEffect, useState } from "react";

// cookies
import Cookies from "js-cookie";

// next
import { useRouter } from "next/navigation";

// sweetalert
import Swal from "sweetalert2";

import { IUserData } from "@/interfaces/types";
import OrderList from "@/components/OrderList/orderList";

const UserProfile: React.FC = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const token = Cookies.get("userData");
    
    if (token) {
      const data = JSON.parse(token);
      setUserData(data); 

    } else {
      setTimeout(() => {
        Swal.fire({
          title: "Couldn't find your profile",
          text: "You will be redirected to the login page.",
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
        });
        router.push("/login");
      }, 2000)
    }
  }, [router]);

  const onClose = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are closing your session",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Log out!",
          text: "Your session is closed.",
          icon: "success",
        });

        Cookies.remove("userData");
        localStorage.clear();
        setUserData(null);

        router.push("/");
      }
    });
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Hello {userData.user.name}</h1>
        <div className="flex flex-col gap-4">
          <div>
          <h2 className="text-lg font-semibold">Email:</h2>
          <p className="text-gray-700">{userData.user.email}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Address:</h2>
            <p className="text-gray-700">{userData.user.address}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Phone:</h2>
            <p className="text-gray-700">{userData.user.phone}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">My orders</h2>
            <OrderList userToken={userData?.token}/>
          </div>
          
     </div>

     {/* Logout Button */}
     <div className="mt-6 text-center">
       <button
         onClick={onClose}
         className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
       >
         Log out
       </button>
     </div>
   </div>
 </div>
);
};

export default UserProfile;
