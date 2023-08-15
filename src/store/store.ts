import { configureStore } from '@reduxjs/toolkit';
import rickMortySlice from './rickmorty.slice';

export const store = configureStore({
  reducer: {
    rickMorty: rickMortySlice,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
