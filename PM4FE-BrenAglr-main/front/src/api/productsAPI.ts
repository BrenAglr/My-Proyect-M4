import { IProduct } from "@/interfaces/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getProductDB = async(): Promise<IProduct[]> => {
    try {
        const res = await fetch(`${API_URL}/products`, {
            next: { revalidate: 1200}
        })
        const products: IProduct[] = await res.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }

}

export const getProductById = async(id: string): Promise<IProduct> => {
    try {
       const products: IProduct[] = await getProductDB();
       const productFilter = products.find((product) => product.id.toString() === id);
       if(!productFilter) throw new Error("Product not found");
       return productFilter;
    } catch (error: any) {
        throw new Error(error);
    }

}