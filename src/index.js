import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { persistor } from 'store/store';
import { store } from 'store/store';
import { App } from 'components/App';
// import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#85243b',
      main: '#be3455',
      light: '#cb5c77',
    },
    secondary: {
      dark: '#ab003c',
      main: '#f50057',
      light: '#f73378',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw-08-phonebook' >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
