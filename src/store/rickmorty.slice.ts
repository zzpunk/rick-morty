import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ParamsSearch } from 'modules/Filters/Filters.interfaces';
import { ICardData } from 'pages/Characters/Characters.interfaces';

interface IInitialState {
  searchParams: ParamsSearch | null;
  activeCharacter: [] | ICardData[];
}

const initialState: IInitialState = {
  searchParams: null,
  activeCharacter: [],
};

const rickMortySlice = createSlice({
  name: 'rickMorty',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<null | ParamsSearch>) => {
      state.searchParams = action.payload;
    },

    setActiveCharacter: (state, action: PayloadAction<[] | ICardData[]>) => {
      state.activeCharacter = action.payload;
    },
  },
});

export const { setSearchParams, setActiveCharacter } = rickMortySlice.actions;

export default rickMortySlice.reducer;
