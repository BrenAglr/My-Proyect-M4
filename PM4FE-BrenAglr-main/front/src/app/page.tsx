//react
import React from "react";

// components
import CardContainer from "@/components/cardContainer";
import CardList from "@/components/cardList";


export const Home: React.FC = () => {
         return (
            <div className="py-8">
              <CardContainer/>
              <CardList/>
            </div>

    );
};

export default Home;
