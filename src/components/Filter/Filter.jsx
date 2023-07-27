import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'store/selectors';
import { setFilter } from 'store/action';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  // слушатель на инпут ввода (для поиска)
  const handleSearch = ({target}) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
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
