
// interfaces
import { IProduct } from "@/interfaces/types"
import AddToCart from "../addToCart";
import Link from "next/link";

export const CardHome: React.FC<IProduct> = (product) => {
    const limitedDescription = product.description.length > 60 
        ? product.description.substring(0, 60) + "..." 
        : product.description;

    return (
        <div className="flex items-center border border-gray-300 rounded-lg shadow-md h-96 p-4 max-w-2xl mx-auto bg-sky-100">
            <img src={product.image} alt="product image" className="w-1/2 h-auto object-cover rounded-lg mr-4" />
            <div className="flex flex-col justify-between w-3/4">
            <Link href={`/product/${product.id}`} key={product.id} passHref>
                <h2 className="text-xl font-bold text-eden mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm">{limitedDescription}</p>
                <h2 className="text-lg font-semibold text-green-600 mt-2">${product.price}</h2>
            </Link>
                <AddToCart product={product}/>
            </div>
        </div>
    );
}

export default CardHome;


