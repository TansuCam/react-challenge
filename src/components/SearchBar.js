import * as React from "react";
import "./styles/Search.css";
import SearchIcon from "./icons/SearchIcon";

function SearchBar(props) {
  const style = {
    width: props.width + "%",
  };
  return (
    <div className="search width" style={style}>
      <SearchIcon className="search-icon" />
      <input
        type="text"
        className="form-control"
        placeholder="Find in records"
      />
    </div>
  );
}

export default SearchBar;
