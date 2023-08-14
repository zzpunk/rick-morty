import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  characters: any;
}

const initialState: IInitialState = {
  characters: null,
};

const rickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<any>) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = rickMortySlice.actions;

export default rickMortySlice.reducer;
