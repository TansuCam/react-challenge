import React from "react";
import InputGroup from "./InputGroup";
import Alert from "./Alert";
import Logo from "./tesodev.png";
import "./styles/Search.css";

function AddLink() {
  return (
    <div className="addlink">
      <div className="d-flex my-3 mx-5">
        <img
          alt="logo"
          style={{ width: "150px", height: "70px", marginRight: "30px" }}
          src={Logo}
        />
        <div className="w-75 mt-3">Return</div>
      </div>
      <Alert></Alert>
      <form>
        <InputGroup></InputGroup>
        <InputGroup></InputGroup>
        <InputGroup></InputGroup>
      </form>
    </div>
  );
}

export default AddLink;
