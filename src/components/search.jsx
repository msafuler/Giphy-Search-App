import React, { useState } from "react";

const SearchBar = (props) => {
  console.log(useState);

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
      </label>
      <div className="search">
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(177, 175, 175)" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="search-bar">
          <input
            type="text"
            id="header-search"
            className="mainLoginInput"
            placeholder=""
            value={props.searchTerm}
            onChange={props.handleUserInput}
            name="s"
          />
        </div>
        <button type="submit" className="button">
        </button>
      </div>
    </form>
  );
};


export default SearchBar;
