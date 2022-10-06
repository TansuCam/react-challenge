import React from "react";
import Button from "./Button";
import Logo from "./tesodev.png";
import SearchBar from "./SearchBar";

function Landing() {
  return (
    <div className="lading-page">
      <div className="container my-5">
        <div className="d-flex flex-row-reverse">
          <Button type="button">Add new record</Button>
        </div>
        <div className="d-flex flex-direction-row justify-content-center logo mt-5">
          <img alt="logo" src={Logo} />
        </div>
        <div className="m-5">
          <h3 className="bold-text-1">Find in records</h3>
          <div className="d-flex w-100" style={{ gridGap: "6px" }}>
            <SearchBar width={75}></SearchBar>
            <Button>Search</Button>
          </div>
          <div className="searc-result"></div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
