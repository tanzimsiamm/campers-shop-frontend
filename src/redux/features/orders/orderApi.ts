
import { TOrder } from "../../../types";
import baseApi from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createOrder : builder.mutation({
            query: (order : TOrder) => ({
                url : '/api/orders',
                method : "POST",
                body: order,   
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const { useCreateOrderMutation } = orderApi;