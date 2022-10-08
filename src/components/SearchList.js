import React from "react";
import LocationIcon from "./icons/LocationIcon";
import "./styles/Search.css";

function SearchList({ data, searchWord }) {
  const sliceData = data.slice(0, 3);
  const seeMore = () => {};
  return (
    <div className="search-list">
      {sliceData.map((val) => {
        return (
          <>
            <div
              key={val}
              className="search-result d-flex align-items-center mt-2"
            >
              <LocationIcon></LocationIcon>
              <div className="search-detail ms-2">
                <span>{val[1]}</span>
                <br />
                <span>
                  <small>
                    {val[4]}, {val[5]}
                  </small>
                </span>
                {data.length}
                {searchWord}
              </div>
            </div>
          </>
        );
      })}
      {data.length > 3 && (
        <div className="d-flex justify-content-center mt-3">
          <button onClick={seeMore}>See more...</button>
        </div>
      )}
    </div>
  );
}
export default SearchList;
