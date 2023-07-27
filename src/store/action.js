// import { nanoid } from 'nanoid';
import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);

const delContact = createAction('contacts/deleteContact');
const setFilter = createAction('filter/setFilter');

export { addContact, delContact, setFilter };
