import * as React from "react";
import LocationIcon from "./icons/LocationIcon";

function SearchResult({ data, listPage = false }) {
  const val = data;

  return (
    <div key={val[0]} className="search-result d-flex align-items-center mt-2">
      <LocationIcon></LocationIcon>
      <div className="search-detail ms-2">
        <span>{val[1]}</span>
        <br />
        <span>
          <small>
            {val[4]}, {val[5]}
          </small>
        </span>
      </div>
      {listPage && (
        <div className="search-user">
          <div>{val[0]}</div>
          <div>{val[3]}</div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
