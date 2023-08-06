import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilteredContacts, selectContacts } from 'redux/contacts/selectors';
import { deleteContactThunk, getContactsThunk } from 'redux/contacts/operations';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);
  // console.log('contacts', contacts);
  // console.log('users', users);

  const handleDelete = (evt)=>{
    dispatch(deleteContactThunk(evt));
    dispatch(getContactsThunk());
  };

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
            // handleDelete={() => dispatch(deleteContactThunk(item.id))}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
