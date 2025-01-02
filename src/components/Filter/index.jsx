import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';

import { filterContacts } from 'store/contacts/filterSlice';
import { selectFilter } from 'store/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(filter);

  useEffect(() => {
    const handler = setTimeout(() => {

      dispatch(filterContacts(inputValue));

    }, 500);

    return () => clearTimeout(handler);
  }, [dispatch, inputValue]);

  // слушатель на инпут ввода (для поиска)
  const handleSearch = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        placeholder="Enter at least 3 characters"
        value={inputValue}
        onChange={handleSearch}
        fullWidth
      />
    </>
  );
};
