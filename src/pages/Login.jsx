import { Box, Container, Typography } from '@mui/material';

import { LoginForm } from "components/LoginForm";

export default function Login() {
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
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}
