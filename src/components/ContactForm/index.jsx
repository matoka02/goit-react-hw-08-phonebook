import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  TextField,
  Snackbar,
  Alert,
  Typography,
} from '@mui/material';

import { addContactThunk } from 'store/contacts/operations';
import useValidateContacts, {
  nameTitle,
  numberTitle,
} from 'hooks/useValidateContacts';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { validateName, validatePhone, isDuplicate } = useValidateContacts();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // добавление
  const handleFormSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    const nameError = validateName(name);
    if (nameError) {
      setSnackbar({ open: true, message: nameError, severity: 'warning' });
      return;
    }

    const phoneError = validatePhone(number);
    if (phoneError) {
      setSnackbar({ open: true, message: phoneError, severity: 'warning' });
      return;
    }

    if (isDuplicate(name)) {
      setSnackbar({
        open: true,
        message: `${name} is already in contacts.`,
        severity: 'warning',
      });
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };
    dispatch(addContactThunk(newContact));
    setSnackbar({
      open: true,
      message: `${name} was successfully added.`,
      severity: 'success',
    });

    evt.target.reset();
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: '' });
  };

  return (
    <>
      <Box
        component='form'
        onSubmit={handleFormSubmit}
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label='Name'
          type='text'
          name='name'
          slotProps={{ input: { title: nameTitle } }}
          required
          fullWidth
        />
        <TextField
          label='Number'
          type='tel'
          name='number'
          slotProps={{
            input: { title: numberTitle },
          }}
          required
          fullWidth
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ marginTop: '1rem' }}
        >
          Add Contact
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
