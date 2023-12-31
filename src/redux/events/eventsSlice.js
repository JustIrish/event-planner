import { createSlice, nanoid } from '@reduxjs/toolkit';
import eventsList from 'data/eventsList.json';

const eventsInitialState = {
  events: eventsList,
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState,
  reducers: {
    addEvent: {
      reducer(state, action) {
        state.events.push(action.payload);
      },
      prepare(event) {
        const {
          title,
          description,
          date,
          time,
          location,
          category,
          picture,
          priority,
        } = event;

        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date,
            time,
            location,
            category,
            picture,
            priority,
          },
        };
      },
    },
    editEvent(state, action) {
      const index = state.events.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (index !== -1) {
        state.events.splice(index, 1, action.payload);
      }
    },
    deleteEvent(state, action) {
      const index = state.events.findIndex(({ id }) => id === action.payload);
      if (index !== -1) {
        state.events.splice(index, 1);
      }
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
