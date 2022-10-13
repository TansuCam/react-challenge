import React, { useState, useEffect } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import LocationIcon from "./icons/LocationIcon";
import "./styles/Search.css";

function SearchList({ data, searchWord, listPage = false }) {
  const sliceData = data.slice(0, 3);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPagination, setDataPagination] = useState([]);

  const seeMore = () => {
    navigate("/listpage", {
      state: { dataList: data, searchWord: searchWord },
    });
  };

  const page = Math.ceil(data.length / 5);

  useEffect(() => {
    var newFilter = [...data];
    if (listPage) {
      const lastData = currentPage * 5;
      const firstData = lastData - 5;
      const filterDataPage = newFilter.slice(firstData, lastData);
      setDataPagination(filterDataPage);
    }
  }, [currentPage, data]);

  return (
    <div>
      {!listPage && (
        <div className="search-list">
          {sliceData.map((val, index) => {
            return <Search key={index} data={val}></Search>;
          })}
          {data.length > 3 && (
            <div className="d-flex justify-content-center mt-3">
              <button
                onClick={() => {
                  seeMore();
                }}
              >
                See more...
              </button>
            </div>
          )}
        </div>
      )}
      {listPage && (
        <div className="result-list">
          {dataPagination.map((val, index) => {
            return (
              <>
                <div
                  key={index + "11"}
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
                  </div>
                  {listPage && (
                    <div className="search-user">
                      <div>{val[0]}</div>
                      <div>{val[3]}</div>
                    </div>
                  )}
                </div>
                <hr></hr>
              </>
            );
          })}
          <div className="d-flex pagination-container">
            <button>Previous</button>
            {[...Array(page)].map((val, index) => {
              return (
                <button onClick={(e) => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              );
            })}
            <button>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default SearchList;
