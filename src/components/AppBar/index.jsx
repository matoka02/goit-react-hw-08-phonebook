import { useState } from 'react';
import { Box, Drawer, IconButton, AppBar as MuiAppBar, Toolbar, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import useAuth from 'hooks/useAuth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UseMenu';
import AuthNav from 'components/AuthNav';


const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  return (
    <MuiAppBar position="static" color="primary">
      <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
        {!isMobile && <Navigation />}
        {!isMobile && (isLoggedIn ? <UserMenu /> : <AuthNav />)}
      </Toolbar>

      {/* Drawer for mobile version */}
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            gap: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <IconButton edge="end" sx={{ alignSelf: 'flex-end' }}>
            <CloseIcon />
          </IconButton>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Drawer>
      )}

    </MuiAppBar>
  );
};

export default AppBar;
