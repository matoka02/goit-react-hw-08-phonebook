import { useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';

import useAuth from 'hooks/useAuth';
import { logOut } from 'store/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        alignItems: ['flex-start', 'center'],
        gap: 2,
      }}
    >
      <Typography variant='h6' component='div'>
        Welcome, {user.name}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
