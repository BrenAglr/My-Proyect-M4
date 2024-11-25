// react
import React from "react";

// component
import CardList from "@/components/cardList";

export const Product: React.FC = () => {
    return (
       <div>
         <h1>All the products you ever need.</h1>
         <CardList/>
       </div>
    )
}

export default Product;    