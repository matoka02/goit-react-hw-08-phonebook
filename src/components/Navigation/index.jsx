import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        alignItems: ['flex-start', 'center'],
        gap: 2,
      }}
    >
      <Button
        component={NavLink}
        to="/"
        variant="text"
        color="inherit"
        sx={{
          textTransform: 'none',
          '&.active': {
            boxShadow: 3,
            // backgroundColor: 'secondary.dark',
          },
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          variant="text"
          color="inherit"
          sx={{
            textTransform: 'none',
            '&.active': {
              boxShadow: 3,
              // backgroundColor: 'secondary.dark',
            },
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
