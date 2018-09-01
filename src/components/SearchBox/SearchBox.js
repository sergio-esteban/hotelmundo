import React from "react";
import searchIcon from "../../assets/icons/filters/search.svg";
import styles from './SearchBox.css';
import PropTypes from 'prop-types';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className={styles.search}>
      <h3>
        Nombre de hotel
      </h3>
      <form>
        <input
          type="search"
          placeholder="Ingresa un hotel"
          onChange={searchChange} />
      </form>
      <button type="submit">
        <img src={searchIcon} alt="search-icon" className={styles.svg} />
      </button>
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.string,
};

export default SearchBox;
