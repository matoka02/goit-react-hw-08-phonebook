import axios from 'axios';

axios.defaults.baseURL =
  'https://64ca7b34700d50e3c704f68e.mockapi.io/api/v1/contacts';

const getContacts = async () => {
  const { data } = await axios.get();
  return data;
};

const deleteContact = async id => {
  const { data } = await axios.delete(id);
  return data;
};

const addContact = async contact => {
  const { data } = await axios.post('', contact);
  return data;
};

export { getContacts, deleteContact, addContact };
