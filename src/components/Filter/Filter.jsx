import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { filter } from 'store/filter/action-filter';

const Filter = () => {
  const value = useSelector((state)=>state.filter);
  const dispatch = useDispatch();

  // слушатель на инпут ввода (для поиска)
  const handleSearch = ({target}) => {
    dispatch(filter(target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
