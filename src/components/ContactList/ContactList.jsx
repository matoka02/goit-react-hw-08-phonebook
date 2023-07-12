import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
