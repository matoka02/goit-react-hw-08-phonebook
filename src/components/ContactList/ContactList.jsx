import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import { deleteContact } from 'redux/contactSlice';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => {
  //   return state.contacts.contacts.filter(contact =>
  //     contact.name
  //       .toLowerCase()
  //       .trim()
  //       .includes(state.filter.toLowerCase().trim())
  //   );
  // });

  const contacts = useSelector(getFilteredContacts);

  return (
    <div>
      <ul>
        {contacts.map((item) => (
          <ContactListItem
            key={item.id}
            name={item.name}
            number={item.phone}
            id={item.id}
            handleDelete={() => dispatch(deleteContactThunk(item.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
