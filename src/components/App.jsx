import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import useAuth from 'hooks/useAuth';
import { refreshUser } from 'store/auth/operations';
import Layout from './Layot';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { LoaderSpinner } from './LoaderSpinner';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <LoaderSpinner /> : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // const dispatch = useDispatch();
  // const error = useSelector(getError);
  // const isLoading = useSelector(getIsLoading);
  // const users = useSelector(selectContacts);
  // console.log(users);

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  // return (
  // <></>
  // <div
  //   style={{
  //     // height: '100vh',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 20,
  //     color: '#010101',
  //   }}
  // >
  //   <h1>Phonebook</h1>
  //   <ContactForm />
  //   <h2> Contacts</h2>
  //   <Filter />
  //   {isLoading && !error && <Loader />}
  //   <ContactList />
  // </div>
  // );
};

// export default App;
