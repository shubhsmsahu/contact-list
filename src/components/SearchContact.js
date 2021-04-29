import React from "react";

const SearchContact = ({ handleSearch }) => {
  return (
    <>
      <div className="search-div">
        <h1 style={{ display: "inline" }}>Search the Contact</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Enter Name or Number"
          onChange={(event) => {
            // console.log(event.target.value);
            handleSearch(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchContact;
