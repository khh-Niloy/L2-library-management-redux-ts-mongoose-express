import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a3-ts-express-mongoose.vercel.app/api",
  }),
  tagTypes: ["books"],
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
  }),
});

// query: ({ id, ...patch }) => ({
//         url: `post/${id}`,
//         method: 'PATCH',
//         body: patch,
//       }),

export const { useGetAllBooksQuery, useCreateBookMutation } = baseApi;
// export const {useLazyGetAllBooksQuery} = baseApi
