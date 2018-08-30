import React from "react";
import searchIcon from "../../assets/icons/filters/search.svg";
import styles from './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className={styles.search}>
      <h3>
        <img src={searchIcon} alt="search-icon" className={styles.svg} />
        Nombre de hotel
      </h3>
      <input
        type="search"
        placeholder="Ingresa un hotel"
        onChange={searchChange} />
      <button type="submit">
        <img src={searchIcon} alt="search-icon" className={styles.svg} />
      </button>
    </div>
  );
};

export default SearchBox;
