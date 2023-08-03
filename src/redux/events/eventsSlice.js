import { createSlice, nanoid } from '@reduxjs/toolkit';
import eventsList from './../../data/eventsList.json';

const eventsInitialState = {
  events: eventsList,
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState,
  reducers: {},
});

export const eventsReducer = eventsSlice.reducer;
