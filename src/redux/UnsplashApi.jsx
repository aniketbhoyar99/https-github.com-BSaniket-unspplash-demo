import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getTopicsList: builder.query({
      query: () => `topics/?client_id=${client_id}`,
    }),
    getTopic: builder.query({
      query: (params) => `topics/${params}?client_id=${client_id}`,
    }),
    getTopicsPhotos: builder.query({
      query: (params) => `topics/${params}/photos?client_id=${client_id}`,
    }),
  }),
});

export const { useGetTopicsListQuery, useLazyGetTopicQuery,useLazyGetTopicsPhotosQuery } =
  unsplashApi;
