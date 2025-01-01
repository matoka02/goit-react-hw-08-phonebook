import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import AppBar from './AppBar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: { xs: '16px', sm: '32px' },
          paddingRight: { xs: '16px', sm: '32px' },
        }}
      >
        <Container maxWidth='lg'>
          <AppBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
