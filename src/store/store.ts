import { configureStore } from '@reduxjs/toolkit';
import { rickMortyApi } from './api';
import rickMortySlice from './rickmorty.slice';

export const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
    rickMorty: rickMortySlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickMortyApi.middleware),
});
