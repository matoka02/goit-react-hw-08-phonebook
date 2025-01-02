import { Box, Container, Typography } from '@mui/material';

import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
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
          Registration
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
}
