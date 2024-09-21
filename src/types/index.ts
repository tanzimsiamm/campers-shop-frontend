export type TProduct = {
    _id?: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    images: string[];
    featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export type TOrder = {
    userName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    paymentMethod: string;
    orderedProducts: {
        productId: string,
        quantity: number
    }[];
    total: number;
};

export type TCartItem = {
    _id : string;
    name : string;
    quantity : number;
    stockQuantity : number;
    price : number;
    image : string;
    date : string;
}


export type TModalProps = {
    setFilterQuery: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  };
  