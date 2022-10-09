import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./tesodev.png";
import SearchBar from "./SearchBar";
var mockData = require("../mockData.json");

function Landing() {
  return (
    <div className="container-fluid my-5">
      <div className="d-flex flex-row-reverse me-5">
        <Link to="/addlink">
          <Button type="button">Add new record</Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center logo mt-5">
        <img alt="logo" src={Logo} />
      </div>
      <div className="search-div">
        <h3 className="bold-text-1">Find in records</h3>
        <SearchBar placeholder="Search" mockData={mockData}></SearchBar>
      </div>
    </div>
  );
}
export default Landing;
