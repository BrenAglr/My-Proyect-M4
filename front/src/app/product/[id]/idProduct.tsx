import ProductDetail from "@/components/productDetail";
import { getProductById } from "@/api/productsAPI";

export const idProduct: React.FC<{params:{id: string}}> = async ({ params }) => {
   const product = await getProductById(params.id);
   
  return (
     <div>
            <ProductDetail {...product} />
       </div>
    )
}

export default idProduct;   