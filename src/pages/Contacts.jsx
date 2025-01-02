import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';

import { getContactsThunk } from 'store/contacts/operations';
import { selectError, selectIsLoading } from 'store/contacts/selectors';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container maxWidth='md' sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Box
        sx={{
          marginTop: '2rem',
          padding: '1rem',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          boxShadow: 2,
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Adding contacts
        </Typography>
        <ContactForm />
      </Box>

      {isLoading && !error && <Loader />}

      <Box
        sx={{
          marginTop: '2rem',
          // marginBottom: '1.5rem',
          padding: '1rem',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          boxShadow: 2,
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Search contacts
        </Typography>
        <Filter />
      </Box>

      <Box
        sx={{
          marginTop: '2rem',
          // marginBottom: '1.5rem',
          padding: '1rem',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          boxShadow: 2,
        }}
      >
        <ContactList />
      </Box>

    </Container>
  );
}
