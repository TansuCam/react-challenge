import React, { useState } from "react";
import "./styles/Search.css";
import Button from "./Button";
import SearchList from "./SearchList";
import SearchIcon from "./icons/SearchIcon";

function SearchBar({ placeholder, mockData }) {
  const style = {
    width: "100%",
    gridGap: "6px",
  };
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const handleFilter = (event) => {
    setSearchWord(event.target.value);
    const newFilter = mockData.data.filter((item) => {
      return item
        .join(",")
        .toLowerCase()
        .includes(searchWord.toLowerCase().trim());
    });
    setFilteredData(newFilter);
  };
  return (
    <div className="ms-2">
      <div className="search d-flex" style={style}>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <Button onClick="handleSearch()">Search</Button>
      </div>
      {filteredData.length !== 0 && searchWord.length >= 2 && (
        <SearchList searchWord={searchWord} data={filteredData}></SearchList>
      )}
    </div>
  );
}

export default SearchBar;
