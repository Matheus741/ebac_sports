import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Product = {
  id: number
  title: string
  price: number
  image?: string
  description?: string
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => '/products'
    })
  })
})

export const { useGetProductsQuery } = productsApi
