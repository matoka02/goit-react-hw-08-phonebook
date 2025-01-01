import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'store/contacts/filterSlice';
import { selectFilter } from 'store/contacts/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // слушатель на инпут ввода (для поиска)
  const handleSearch = ({target}) => {
    dispatch(filterContacts(target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by name... </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
