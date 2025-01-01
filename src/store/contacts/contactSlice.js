import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleGetFulfilled = (state, action) => {
  state.items = action.payload;
  state.error = null;
  state.isLoading = false;
};

const handleDeleteFulfilled = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload);
  state.error = null;
  state.isLoading = false;
};

const handleAddFulfilled = (state, action) => {
  state.items = [...state.items, action.payload];
  state.error = null;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactSlice = createSlice({
  name: 'phone',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
    .addCase(getContactsThunk.pending, handlePending)
    .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
    .addCase(getContactsThunk.rejected, handleRejected)

    .addCase(deleteContactThunk.pending, handlePending)
    .addCase(deleteContactThunk.fulfilled, handleDeleteFulfilled)
    .addCase(deleteContactThunk.rejected, handleRejected)

    .addCase(addContactThunk.pending, handlePending)
    .addCase(addContactThunk.fulfilled, handleAddFulfilled)
    .addCase(addContactThunk.rejected, handleRejected);

      // .addCase(getContactsThunk.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(getContactsThunk.fulfilled, (state, action) => {
      //   state.items = action.payload;
      //   state.error = null;
      //   state.isLoading = false;
      // })
      // .addCase(getContactsThunk.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.isLoading = false;
      // })

      // .addCase(deleteContactThunk.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteContactThunk.fulfilled, (state, action) => {
      //   state.items = state.items.filter(item => item.id !== action.payload);
      //   state.error = null;
      //   state.isLoading = false;
      // })
      // .addCase(deleteContactThunk.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.isLoading = false;
      // })

      // .addCase(addContactThunk.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(addContactThunk.fulfilled, (state, action) => {
      //   state.items = [action.payload, ...state.items];
      //   state.error = null;
      //   state.isLoading = false;
      // })
      // .addCase(addContactThunk.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.isLoading = false;
      // });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
