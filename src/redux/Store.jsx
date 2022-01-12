import { configureStore } from "@reduxjs/toolkit";
import {unsplashApi} from './UnsplashApi'
export  const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware),
});
