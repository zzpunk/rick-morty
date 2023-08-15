import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ParamsSearch } from 'modules/Filters/Filters.interfaces';

interface IInitialState {
  searchParams: ParamsSearch | null;
}

const initialState: IInitialState = {
  searchParams: null,
};

const rickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<null | ParamsSearch>) => {
      state.searchParams = action.payload;
    },
  },
});

export const { setSearchParams } = rickMortySlice.actions;

export default rickMortySlice.reducer;
