import React, { useState, useEffect } from "react";
import "./styles/Search.css";
import Button from "./Button";
import SearchList from "./SearchList";
import SearchIcon from "./icons/SearchIcon";
import FilterIcon from "./icons/FilterIcon";
var mockData = require("../mockData.json");

function SearchBar({ placeholder, value, listPage = false }) {
  const style = {
    width: "100%",
    gridGap: "6px",
  };
  const [sort, setSort] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState(value ? value : "");

  function ascName() {
    setFilteredData(filteredData.sort((a, b) => (a[0] > b[0] ? 1 : -1)));
    console.log(filteredData);
  }

  useEffect(() => {
    search();
  }, [searchWord]);

  useEffect(() => {
    const dataArray = [...filteredData];
    var newData = [];
    if (sort === "ascname") {
      newData = dataArray.sort((a, b) => (a[1] > b[1] ? 1 : -1));
      setFilteredData(newData);
    } else if (sort === "dscname") {
      newData = dataArray.sort((a, b) => (a[1] > b[1] ? -1 : 1));
      setFilteredData(newData);
    } else if (sort === "dscyear") {
      newData = dataArray.sort((a, b) => (a[3] > b[3] ? 1 : -1));
      setFilteredData(newData);
    } else if (sort === "ascyear") {
      newData = dataArray.sort((a, b) => (a[3] > b[3] ? -1 : 1));
      setFilteredData(newData);
    }
  }, [sort]);

  const search = () => {
    var newFilter;
    newFilter = mockData.data.filter((item) => {
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
          autoComplete="off"
          type="text"
          className="form-control searchbarrr"
          placeholder={placeholder}
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <div onClick={search}>
          <Button>Search</Button>
        </div>
      </div>
      {listPage && (
        <div className="dropdown" tabIndex="1">
          <i className="db2" tabIndex="1"></i>
          <div className="dropbtn">
            <FilterIcon></FilterIcon> Order By
          </div>
          <div className="dropdown-content py-2">
            <div>
              <button
                className="content-button py-2"
                onClick={() => setSort("ascname")}
              >
                Name ascending
              </button>
            </div>
            <div>
              <button
                className="content-button py-2"
                onClick={() => setSort("dscname")}
              >
                Name descending
              </button>
            </div>
            <div>
              <button
                className="content-button py-2"
                onClick={() => setSort("ascyear")}
              >
                Year ascending
              </button>
            </div>
            <div>
              <button
                className="content-button py-2"
                onClick={() => setSort("dscyear")}
              >
                Year descending
              </button>
            </div>
          </div>
        </div>
      )}
      {filteredData.length !== 0 && searchWord.length >= 2 && (
        <SearchList
          listPage={listPage}
          searchWord={searchWord}
          data={filteredData}
        ></SearchList>
      )}
    </div>
  );
}

export default SearchBar;
