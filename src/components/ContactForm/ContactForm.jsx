import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from 'store/contacts/operations';
import { getFilteredContacts } from 'store/contacts/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilteredContacts);
  // console.log(items);

    // добавление
  const handleFormSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const contactsList = [...items];

    // проверка на дубликаты
    let duplicate = contactsList.findIndex(contact=>contact.name.toLowerCase()===name.toLowerCase()) !== - 1;
    // console.log(duplicate);

    if (duplicate) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      dispatch(addContactThunk(newContact));
    };
    evt.target.reset();
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
    />
    <button className={css.formBtn} type="submit">
      Add contact
    </button>
  </form>
  )
};

export default ContactForm;
