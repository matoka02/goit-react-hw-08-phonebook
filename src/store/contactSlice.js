import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  reducers: {
    // addContact(state, action) {
    addContact(state, { payload }) {
      // проверка на дубликаты
      let duplicate = state.contacts.find(contact => contact.name === payload.name);

      if (duplicate) {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
