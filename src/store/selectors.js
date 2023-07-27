const getContacts = state => {
  return state.contacts.items;
};

const getFilter = state => {
  return state.contacts.filter;
};

export { getContacts, getFilter };
