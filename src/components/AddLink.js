import React, { useState } from "react";
import InputGroup from "./InputGroup";
import Alert from "./Alert";
import Button from "./Button";
import ArrowIcon from "../components/icons/ArrowIcon";
import Logo from "./tesodev.png";
import "./styles/Search.css";
var mockData = require("../mockData.json");

function AddLink() {
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  const [fullnameError, setfullnameError] = useState("");
  const [countryError, setcountryError] = useState("");
  const [cityError, setcityError] = useState("");
  const [mailError, setmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = JSON.parse(
      JSON.stringify(Object.fromEntries(formData.entries()))
    );
    if (emailValidation.test(data.mail)) {
    }
    console.log(data);
  };

  const handleError = (e) => {
    const element = e.target;
    if (element.getAttribute("name") === "fullname") {
      if (element.value.length < 3) {
        setfullnameError("error fullname");
      } else {
        setfullnameError("");
      }
    }
    if (element.getAttribute("name") === "country") {
      if (element.value.length < 3) {
        setcountryError("error country");
      } else {
        setcountryError("");
      }
    }
    if (element.getAttribute("name") === "city") {
      if (element.value.length < 3) {
        setcityError("error city");
      } else {
        setcityError("");
      }
    }
    if (element.getAttribute("name") === "mail") {
      if (element.value.length < 3) {
        setmailError("error mail");
      } else {
        setmailError("");
      }
    }
  };

  return (
    <div className="addlink">
      <div className="d-flex my-3 mx-5">
        <img
          alt="logo"
          style={{ width: "150px", height: "70px", marginRight: "30px" }}
          src={Logo}
        />
        <div className="d-flex return-list align-items-center">
          <ArrowIcon></ArrowIcon>
          <span className="ms-2">Return to List Page</span>
        </div>
      </div>
      <Alert></Alert>
      <form onSubmit={handleSubmit}>
        <InputGroup
          name={"fullname"}
          type={"text"}
          title={"Name Surname"}
          placeholder={"Enter name and surname"}
          error={fullnameError}
          onBlur={handleError}
        ></InputGroup>
        <InputGroup
          name={"country"}
          type={"text"}
          title={"Country"}
          placeholder={"Enter a country"}
          error={countryError}
          onBlur={handleError}
        ></InputGroup>
        <InputGroup
          name={"city"}
          type={"text"}
          title={"City"}
          placeholder={"Enter a city"}
          error={cityError}
          onBlur={handleError}
        ></InputGroup>
        <InputGroup
          name={"mail"}
          type={"email"}
          title={"Email"}
          placeholder={"Enter a e-mail (abc@xyz.com)"}
          error={mailError}
          onBlur={handleError}
        ></InputGroup>
        <div style={{ float: "right" }}>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}

export default AddLink;
