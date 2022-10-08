import React from "react";
import Button from "./Button";
import Logo from "./tesodev.png";
import SearchBar from "./SearchBar";
var mockData = require("../mockData.json");

function Landing() {
  return (
    <div className="container my-5">
      <div className="d-flex flex-row-reverse">
        <Button type="button">Add new record</Button>
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
