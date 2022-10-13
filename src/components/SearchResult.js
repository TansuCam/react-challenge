import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Search.css";
import Button from "./Button";
import SearchList from "./SearchList";
import SearchIcon from "./icons/SearchIcon";
import FilterIcon from "./icons/FilterIcon";
var mockData = require("../mockData.json");

function SearchResult({ placeholder, value, listPage = false, onClick }) {
  const style = {
    width: "100%",
    gridGap: "6px",
  };
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState(value ? value : "");

  useEffect(() => {
    search();
  }, [searchWord]);

  const seeMore = () => {
    navigate("/listpage", {
      state: { dataList: filteredData, searchWord: searchWord },
    });
  };

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
          className="form-control"
          placeholder={placeholder}
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        {listPage ? (
          <div onClick={search}>
            <Button disabled={searchWord.length >= 2 ? false : true}>
              Search
            </Button>
          </div>
        ) : (
          <div onClick={seeMore}>
            <Button disabled={searchWord.length >= 2 ? false : true}>
              Search
            </Button>
          </div>
        )}
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
          searchWord={searchWord}
          data={filteredData}
          listPage={listPage}
        ></SearchList>
      )}
    </div>
  );
}

export default SearchResult;
