import { TProduct } from "../../../types";
import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createProduct : builder.mutation({
            query: (product : TProduct) => ({
                url : '/create-product',
                method : "POST",
                body: product,   
            }),
           invalidatesTags: ['Products']
        }),

        getProducts : builder.query({
            query: (query) => ({
                url : '/products',
                method : "GET",
                params : query,
            }),
            providesTags: ['Products']
        }),


        getSingleProduct : builder.query({
            query: (productId: string) => ({
                url : `/products/${productId}`,
                method : "GET",   
            }),
            providesTags : ['Single-product']
        }),

        getBestSellingProducts : builder.query({
            query: () => ({
                url : `/best-selling-products`,
                method : "GET",   
            }),
        }),

        getFeaturedProducts : builder.query({
            query: () => ({
                url : `/featured-products`,
                method : "GET",   
            }),
        }),

        deleteProduct : builder.mutation({
            query: (productId: string) => ({
                url : `/products/${productId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Products']
        }),

        updateProduct : builder.mutation({
            query: ({ productId , payload } : { productId: string, payload:TProduct}) => ({
                
                url : `/products/${productId}`,
                method : "PATCH", 
                body : payload,  
            }),
            invalidatesTags: ['Products', 'Single-product']
        }),
    })
})

export const {
     useCreateProductMutation,
      useGetProductsQuery,
       useDeleteProductMutation,
        useUpdateProductMutation, useGetSingleProductQuery, 
        useGetBestSellingProductsQuery,
         useGetFeaturedProductsQuery } = productApi;