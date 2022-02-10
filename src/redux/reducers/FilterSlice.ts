import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  filter: 'favourite' | 'all';
}

const initialState: FilterState = {
  filter: 'favourite',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
