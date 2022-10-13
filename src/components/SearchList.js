import React, { useState, useEffect } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import LocationIcon from "./icons/LocationIcon";
import "./styles/Search.css";

function SearchList({ data, searchWord, listPage = false }) {
  const sliceData = data.slice(0, 3);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPagination, setDataPagination] = useState([]);

  const seeMore = () => {
    navigate("/listpage", {
      state: { dataList: data, searchWord: searchWord },
    });
  };

  const totalNumber = Math.ceil(data.length / 5);

  const dotes = [];
  const firstThree = [1, 2, 3];

  for (let x = 2; x >= 0; x--) {
    dotes.push(totalNumber - x);
  }
  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage((i) => i - 1);
      setActiveItem((i) => i - 1);
    }
  };
  const next = () => {
    if (currentPage !== totalNumber) {
      setCurrentPage((i) => i + 1);
      setActiveItem((i) => i + 1);
    }
  };
  useEffect(() => {
    var newFilter = [...data];
    if (listPage) {
      const lastData = currentPage * 5;
      const firstData = lastData - 5;
      const filterDataPage = newFilter.slice(firstData, lastData);
      setDataPagination(filterDataPage);
      if (currentPage > totalNumber) {
        setCurrentPage(1);
      }
    }
  }, [currentPage, data]);

  return (
    <div>
      {!listPage && (
        <div className="search-list">
          {sliceData.map((val, index) => {
            return (
              <>
                <Search key={index} data={val}></Search>
                <hr className="hr-landing"></hr>
              </>
            );
          })}
          {data.length > 3 && (
            <div className="d-flex justify-content-center mt-3">
              <button
                onClick={() => {
                  seeMore();
                }}
              >
                Show more...
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
                  key={index}
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
            <button className="px-4" onClick={prev}>
              Previous
            </button>
            {(totalNumber < 7 && (
              <>
                {[...Array(totalNumber)].map((number, index) => (
                  <button
                    className={activeItem === index + 1 ? "active" : ""}
                    onClick={() => {
                      setActiveItem(index + 1);
                      setCurrentPage(index + 1);
                    }}
                    key={index}
                  >
                    {index + 1}
                  </button>
                ))}
              </>
            )) || (
              <>
                {firstThree.map((number) => (
                  <button
                    className={activeItem === number ? "active" : ""}
                    onClick={() => {
                      setActiveItem(number);
                      setCurrentPage(number);
                    }}
                    key={number}
                  >
                    {number}
                  </button>
                ))}
                {(!(
                  firstThree.includes(currentPage) ||
                  dotes.includes(currentPage)
                ) && (
                  <>
                    {" "}
                    . . .
                    <button
                      name="pagenumbers"
                      className={activeItem === currentPage ? "active" : ""}
                    >
                      {" "}
                      {currentPage}{" "}
                    </button>
                    . . .
                  </>
                )) || <div className="dots"> . . . </div>}
                {dotes.map((number) => (
                  <button
                    onClick={() => {
                      setActiveItem(number);
                      setCurrentPage(number);
                    }}
                    className={activeItem === number ? "active" : ""}
                    key={number}
                  >
                    {number}
                  </button>
                ))}
              </>
            )}

            <button className="px-4" onClick={next}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default SearchList;
