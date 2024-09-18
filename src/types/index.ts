export type TProduct = {
    _id? : string,
    product_name : string,
    category : string,
    quantity? : number,
    stock_quantity : number,
    price : number,
    description : string,
    rating : number,
    images : string[];
    createdAt? : string,
    updatedAt? : string,
};

export type TOrder = {
    userName : string;
    email : string;
    phone : string;
    deliveryAddress : string;
    paymentMethod : string;
    orderedProducts : { 
        productId : string ,
        quantity : number 
    }[];
    total : number;
}