import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getPhotosList: builder.query({
      query: (params) =>
        params.entity && params.userId && params.subEntity
          ? `${params.entity}/${params.userId}/${params.subEntity}?client_id=${client_id}`
          : params.userId && params.entity
          ? `${params.entity}/${params.userId}?client_id=${client_id}`
          : params.subEntity && params.searchName && params.entity
          ? `${params.entity}/${params.subEntity}?client_id=${client_id}&query=${params.searchName}`
          : `${params.entity}/?client_id=${client_id}`,
    }),

    getSearchPhotos: builder.query({
      query: (params) => {
        var finalUrl = `search/photos?client_id=${client_id}&query=${params.query}&per_page=${params.perPage}&page=${params.page}`;
        return {
          url: params.orientation
            ? `${finalUrl}&orientation=${params.orientation}`
            : params.orderBy
            ? `${finalUrl}&order_by=${params.orderBy}`
            : `${finalUrl}`,
        };
      },
    }),
  }),
});

export const { useLazyGetSearchPhotosQuery, useLazyGetPhotosListQuery } =
  unsplashApi;
