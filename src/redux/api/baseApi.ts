import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://campers-shop-backend-sigma.vercel.app' }),
  tagTypes: ['Products', 'Single-product'],
  endpoints: () => ({})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default baseApi;