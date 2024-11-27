// react
import React from "react"

// interfaces
import { IUserOrder } from "@/interfaces/types";

interface IOrderCardProps {
    order: IUserOrder
} 

const OrderCard: React.FC<IOrderCardProps> = ({order}) => {

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
          case "approved":
            return "text-green-500";
          case "canceled":
            return "text-red-500";
          case "pending":
            return "text-blue-500";
          default:
            return "text-gray-500";
        }
      };
      
    return (
        <div
              key={order.id}
              className="bg-janna border border-pink-200 rounded-lg p-4 shadow-md"
            >
              <p>
                <span className="font-semibold underline">Order ID:</span>{" "}
                <span className="font-normal">{order.id}</span>
              </p>
              <p>
                <span className="font-semibold underline">Status:</span>{" "}
                <span className={`${getStatusColor(order.status)} font-normal`}>
                  {order.status.toLocaleUpperCase()}
                </span>
              </p>
              <p>
                <span className="font-semibold underline">Date:</span>{" "}
                <span className="font-normal">
                  {new Date(order.date)?.toLocaleDateString()}
                </span>
              </p>
              <p>
                <span className="font-semibold underline">Products:</span>{" "}
                <span className="font-normal">{order.products.length} {order.products.map((product)=> (
                    <div key={product.id}>{product.name}</div>
                ))}</span>
              </p>
            </div>
    )
}

export default OrderCard;