"use client";

import { getOrders } from "@/api/orderAPI";
import { IUserOrder } from "@/interfaces/types";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import OrderCard from "../orderCard";

interface IOrderListProps {
  userToken: string;
}

const OrderList: React.FC<IOrderListProps> = ({ userToken }) => {
  const [userOrders, setUserOrders] = useState<IUserOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getOrders(userToken);
        setUserOrders(orders);
      } catch (error) {
        Swal.fire({
          title: "Error 400",
          text: "Failed to fetch your orders.",
          icon: "error",
        });
        console.log("There was an error", error);
      }
    };

    fetchOrders();
  }, [userToken]);

  return (
    <div className="mt-4">
      {userOrders && userOrders.length > 0 ? (
        <div className="space-y-4">
          {userOrders.map((order) => (
            <OrderCard order={order}/>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No orders yet.</p>
      )}
    </div>
  );
};

export default OrderList;

