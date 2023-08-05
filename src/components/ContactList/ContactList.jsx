import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilteredContacts, selectContacts } from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);

  return (
    <div>
      <h3>Your phonebook has {users.length} contacts</h3>
      <ul>
        {contacts.map((item) => (
          <ContactListItem
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
            handleDelete={() => dispatch(deleteContactThunk(item.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
