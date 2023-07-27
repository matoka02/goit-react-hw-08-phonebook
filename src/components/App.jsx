import React from 'react';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { addContact, delContact } from 'store/action';

const LOCAL_KEY = 'contacts';

export const App = () => {
  // const allContacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? getContacts;
  });

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (contactList) {
      setContacts(contactList);
    }
  }, []);

  useEffect(() => {
    contacts && localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // проверка на дубликаты
  const handleSubmit = evt => {
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
  };

  // удаление
  const handleDelete = evt => {
    dispatch(delContact(evt))
  };

  // фильтр по поиску
  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      // console.log(contact.name);
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2> Contacts</h2>
      <Filter />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      ></ContactList>
    </div>
  );
};

// export default App;
