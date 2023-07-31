import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './action-contacts';

export const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    let duplicate = state.find(contact => contact.name === payload.name);

    if (duplicate) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
