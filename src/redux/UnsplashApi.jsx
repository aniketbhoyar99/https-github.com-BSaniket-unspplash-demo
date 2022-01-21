import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getPhotosList: builder.query({
      query: () => `photos/?client_id=${client_id}`,
    }),
    getTopicsList: builder.query({
      query: () => `topics/?client_id=${client_id}`,
    }),
    getTopic: builder.query({
      query: (params) => `topics/${params}?client_id=${client_id}`,
    }),
    getTopicsPhotos: builder.query({
      query: (params) => `topics/${params}/photos?client_id=${client_id}`,
    }),

    getSearchPhotos: builder.query({
      query: (params) =>
      params.clear?`search/photos?client_id=${client_id}&query=${params.query}`: params.orientation && params.orderBy ? `search/photos?client_id=${client_id}&query=${params.query}&orientation=${params.orientation}&order_by=${params.orderBy}` : params.orientation ? `search/photos?client_id=${client_id}&query=${params.query}&orientation=${params.orientation}`: params.orderBy ? `search/photos?client_id=${client_id}&query=${params.query}&order_by=${params.orderBy}`: `search/photos?client_id=${client_id}&query=${params.query}`,
    }),
    getCollection: builder.query({
      query: (params) =>
        `search/collections?client_id=${client_id}&query=${params}`,
    }),
    getCollectionsPreview: builder.query({
      query: (params) =>
        params.entity ? `collections/${params.userId}/${params.entity}?client_id=${client_id}` : `collections/${params.userId}?client_id=${client_id}`,
    }),
  }),
});

export const {
  useGetTopicsListQuery,
  useLazyGetTopicQuery,
  useLazyGetTopicsPhotosQuery,
  useLazyGetSearchPhotosQuery,
  useLazyGetCollectionQuery,
  useGetPhotosListQuery,
  useLazyGetCollectionsPreviewQuery,
} = unsplashApi;
