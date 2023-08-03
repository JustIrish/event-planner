// import { createSelector } from '@reduxjs/toolkit';

export const selectEvents = state => state.events.events;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.events.isLoading;
export const selectError = state => state.events.error;
