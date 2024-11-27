export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number
}

export interface ICategory {
    id: number;
    name: string
}

export interface ILoginProps {
    email: string;
    password: string
}

export interface IErrorsProps {
    [key: string]: string | undefined;
    email: string;
    password: string;
    name?: string;
    address?: string;
    phone?: string
}

export interface IRegisterProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string
}

export interface IUserData {
    token: string;
    user: {
        credential: {
            id: number;
            password: string
        };
        id: number;
        name: string;
        email: string;
        address: string;
        phone: string;
        role: string;
        orders: any[];
    }
}

export interface IUserOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}