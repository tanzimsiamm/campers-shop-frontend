import { TProduct } from "../../../types";
import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createProduct: builder.mutation({
            query: (product: TProduct) => ({
                url: '/api/products',
                method: "POST",
                body: product,
            }),
            invalidatesTags: ['Products']
        }),

        getProducts: builder.query({
            query: (query) => ({
                url: '/api/products',
                method: "GET",
                params: query,
            }),
            providesTags: ['Products']
        }),

        getSingleProduct: builder.query({
            query: (productId: string) => ({
                url: `/api/products/${productId}`,
                method: "GET",
            }),
            providesTags: ['Single-product']
        }),

        getBestSellingProducts: builder.query({
            query: () => ({
                url: `/api/products/best-selling-products`,
                method: "GET",
            }),
        }),

        getFeaturedProducts: builder.query({
            query: () => ({
                url: `/api/products/featured-products`,
                method: "GET",
            }),
        }),

        updateProduct: builder.mutation({
            query: ({ productId, payload }: { productId: string, payload: TProduct }) => ({

                url: `/api/products/${productId}`,
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ['Products', 'Single-product']
        }),

        deleteProduct: builder.mutation({
            query: (productId: string) => ({
                url: `/api/products/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Products']
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