import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

const LOCAL_KEY = 'contactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  // // добавление в хранилище
  // componentDidMount(){
  //   const contactsFromLocalStorage = localStorage.getItem(LOCAL_KEY);
  //   const parsedContacts = JSON.parse(contactsFromLocalStorage);

  //   if (parsedContacts) {
  //     this.setState({contacts: parsedContacts})
  //   }
  // };

  // // удаление из хранилища
  // componentDidUpdate(prevProps, prevState){
  //   const prevStateContacts = prevState.contacts;
  //   const nextStayContacts = this.state.contacts;

  //   if (prevStateContacts !== nextStayContacts) {
  //     localStorage.setItem(LOCAL_KEY, JSON.stringify(nextStayContacts));
  //   } 
  //   else {
  //     localStorage.removeItem('todo')
  //   }
  // };

  // слушатель на инпут ввода (для поиска)
  handleSearch = ({ target }) => {
    // console.log(target.value);
    this.setState({ filter: target.value });
  };

  // проверка на дубликаты
  handleSubmit = (evt) => {
    const id = nanoid();
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  // удаление
  handleDelete = (evt) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== evt),
    }));
  };

  // фильтр по поиску
  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      // console.log(contact.name);
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
      // console.log(this.state.contacts);
      // console.log(this.state.filter);
    return filterContactsList;
  };


  render() {
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
        <ContactForm 
        handleSubmit={this.handleSubmit} 
        />
        <h2> Contacts</h2>
        <Filter 
        filter={this.state.filter} 
        handleSearch={this.handleSearch} 
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        ></ContactList>
      </div>
    );
  }

};

