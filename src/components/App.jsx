import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  // // отклонено
  // const [contacts, setContacts] = useState([
  //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  // ]);

  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? initialContacts
    );
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

  // // отклонено
  // const [firstRenderList, setList] = useState(true);

  // useEffect(()=> {
  //   if (firstRenderList) {
  //     const contactsFromLocalStorage = localStorage.getItem(LOCAL_KEY);

  //     if (contactsFromLocalStorage !== 'undefined') {
  //       const parsedContacts = JSON.parse(contactsFromLocalStorage);

  //       if (parsedContacts) {
  //         setContacts(parsedContacts);
  //       }
  //     };

  //     setList(false);

  //   } else {
  //     localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  //   }
  // }, [contacts, firstRenderList]);

  // слушатель на инпут ввода (для поиска)
  const handleSearch = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  // проверка на дубликаты
  const handleSubmit = evt => {
    const id = nanoid();
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    setContacts(contactsLists);
  };

  // удаление
  const handleDelete = evt => {
    setContacts(contacts.filter(contact => contact.id !== evt));
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
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}
      ></ContactList>
    </div>
  );
};

// export default App;
