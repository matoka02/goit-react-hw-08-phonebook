import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Snackbar, Alert } from '@mui/material';

import { logIn } from 'store/auth/operations';
import { selectError } from 'store/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error',
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(formData))
      .unwrap()
      .then(() => {
        setSnackbar({
          open: true,
          message: 'Login successful',
          severity: 'success',
        });
        form.reset();
      })
      .catch(() => {
        setSnackbar({
          open: true,
          message: `Login failed: ${error}`,
          severity: 'error',
        });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      autoComplete='off'
      sx={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <Box mb={2}>
        <TextField
          fullWidth
          name='email'
          label='Email'
          type='email'
          variant='outlined'
          placeholder='Enter email'
          required
        />
      </Box>
      <Box mb={3}>
        <TextField
          fullWidth
          name='password'
          label='Password'
          type='password'
          variant='outlined'
          placeholder='Enter password'
          required
        />
      </Box>
      <Box textAlign='center'>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
        >
          Log In
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
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
    </Box>
  );
};
