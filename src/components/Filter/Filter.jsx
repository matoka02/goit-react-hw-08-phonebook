import React from "react";
import propTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, handleSearch }) => (
    <div>
        <label className={css.filterLabel}>Find contacts by Name </label>
        <input 
        className={css.filterName} 
        type="text" 
        name="filter" 
        placeholder="Enter filter" 
        value={filter} 
        onChange={handleSearch}/>
    </div>
);

Filter.propTypes = {
    filter: propTypes.string.isRequired,
    handleSearch: propTypes.func.isRequired,
};

export default Filter;