import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, Box, Snackbar, Alert } from '@mui/material';

import { getFilteredContacts, selectContacts } from 'store/contacts/selectors';
import { deleteContactThunk } from 'store/contacts/operations';

import { ContactListItem } from 'components/ContactListItem';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);

  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleDelete = (id, name) => {
    dispatch(deleteContactThunk(id))
      .unwrap()
      .then(() => {
        setSnackbar({
          open: true,
          message: `Contact ${name} has been removed`,
        });
      })
      .catch(() => {
        setSnackbar({
          open: true,
          message: `Failed to remove contact ${name}`,
        });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '' });
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Typography
        variant='h4'
        component='h2'
        sx={{
          mb: 2,
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        Your phonebook has {users.length} contacts
      </Typography>
      <List>
        {contacts.map(item => (
          <ContactListItem
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
            handleDelete={() => handleDelete(item.id, item.name)}
          />
        ))}
      </List>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity='success'
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
