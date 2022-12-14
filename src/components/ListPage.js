import * as React from "react";
import SearchBar from "./SearchResult";
import Button from "./Button";

import Logo from "./img/tesodev.png";
//import "./styles/Search.css";
import "./styles/ListPage.css";
import { useLocation, Link } from "react-router-dom";

function SearchResult() {
  const location = useLocation();

  return (
    <div className="list-page">
      <div className="d-flex my-3 mx-5">
        <div style={{ height: 70 }}>
          <Link to="/">
            <img
              alt="logo"
              style={{ width: "150px", height: "70px", marginRight: "30px" }}
              src={Logo}
            />
          </Link>
        </div>
        <div className="w-75 mt-3">
          <SearchBar
            listPage={true}
            value={location?.state?.searchWord ? location.state.searchWord : ""}
          ></SearchBar>
        </div>
        <div className="mt-3" style={{ width: 250 }}>
          <Link to="/addlink">
            <Button type="button">Add new record</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
