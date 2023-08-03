import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import css from './ContactForm.module.css';
// import { addContact } from 'store/contacts/action-contacts';
import { addContact } from 'redux/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // слушатель на инпут ввода (для добавления)
  const handleChangeName = ({target}) => {
    const {value} = target;
    setName(value);
  };

  // слушатель на инпут ввода (для добавления)
  const handleChangeNumber = ({target}) => {
    const {value} = target;
    setNumber(value);
  };

    // добавление
  const handleFormSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target);
    // dispatch(addContact(name,number));
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(newContact))
    setName('');
    setNumber('');
    // evt.target.reset();
  };

  return(
    <form className={css.form} onSubmit={handleFormSubmit}>
    <label className={css.formLabel}>Name</label>
    <input
      className={css.formName}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="Enter name"
      value={name}
      onChange={handleChangeName}
    />
    <label className={css.formLabel}>Number</label>
    <input
      className={css.formNumber}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      placeholder="Enter phone number"
      value={number}
      onChange={handleChangeNumber}
    />
    <button className={css.formBtn} type="submit">
      Add contact
    </button>
  </form>    
  ) 
};

export default ContactForm;
