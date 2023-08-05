import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Helmet } from "react-helmet";

import { getContactsThunk } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
        <title>Phonebook</title>
      {/* </Helmet> */}
      <ContactForm />
      {isLoading && !error && <Loader />}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <Filter />
      <ContactList />
    </>
  );
}