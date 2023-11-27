// import { createSelector } from '@reduxjs/toolkit';

export const selectEvents = state => state.events.events;
export const selectFilter = state => state.filter.category;
export const selectSort = state => state.filter.sort;
export const selectQuery = state => state.filter.query;
export const selectIsLoading = state => state.events.isLoading;
export const selectError = state => state.events.error;
