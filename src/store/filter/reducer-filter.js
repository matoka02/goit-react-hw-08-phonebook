import { createReducer } from '@reduxjs/toolkit';
import { filter } from './action-filter';

export const filterReducer = createReducer('', {
    [filter]: (state, action)=> action.payload
});