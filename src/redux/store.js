import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './events/eventsSlice';
import { filterReducer } from './events/filterSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
  },
});
