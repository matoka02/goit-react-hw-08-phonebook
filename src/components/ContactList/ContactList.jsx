import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { deleteContact } from 'store/contacts/action-contacts';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // удаление
  const handleDelete = evt => {
    dispatch(deleteContact(evt));
  };

  // фильтр по поиску
  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      // console.log(contact.name);
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div>
      <ul>
        {visibleContacts.map((contact, id) => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
