import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a3-ts-express-mongoose.vercel.app/api",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    getSingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBook: builder.mutation({
      query: (borrowBookData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowBookData,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateBookMutation,
  useGetSingleBooksQuery,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
} = baseApi;
// export const {useLazyGetAllBooksQuery} = baseApi
