import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={NavLink}
        to='/register'
        variant='contained'
        color='primary'
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to='/login'
        variant='contained'
        color='primary'
      >
        Log In
      </Button>
    </Box>
  );
};

export default AuthNav;
