import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-near-white"
        type="search"
        placeholder="Ingrese el nombre del hotel"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
