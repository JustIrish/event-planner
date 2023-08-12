import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { category: '', sort: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
