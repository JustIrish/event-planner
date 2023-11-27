import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { category: '', sort: '', query: '' };

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
    setSearch(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
