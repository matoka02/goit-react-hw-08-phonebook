import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'store/contacts/selectors';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phonePattern =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
export const nameTitle =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
export const numberTitle =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const useValidateContacts = () => {
  const items = useSelector(getFilteredContacts);

  const validateName = name => {
    if (!name.trim()) {
      return 'Name cannot be empty.';
    }
    if (!namePattern.test(name)) {
      return 'Name can contain only letters, apostrophes, dashes, and spaces.';
    }
    return null;
  };

  const validatePhone = phoneNumber => {
    if (!phoneNumber.trim()) {
      return 'Phone number cannot be empty.';
    }
    if (!phonePattern.test(phoneNumber)) {
      return 'Invalid phone number format.';
    }
    return null;
  };

  const isDuplicate = name => {
    return items.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return { validateName, validatePhone, isDuplicate };
};

export default useValidateContacts;
