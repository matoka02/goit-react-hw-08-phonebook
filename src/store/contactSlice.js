import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;