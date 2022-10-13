import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputGroup from "./InputGroup";
import Alert from "./Alert";
import Button from "./Button";
import ArrowIcon from "../components/icons/ArrowIcon";
import Logo from "./img/tesodev.png";

import "./styles/AddLink.css";
var mockData = require("../mockData.json");

function AddLink() {
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  const spaceReg = /[a-zA-Z]+\s+[a-zA-Z]+/g;

  const [fullnameError, setfullnameError] = useState("");
  const [countryError, setcountryError] = useState("");
  const [cityError, setcityError] = useState("");
  const [mailError, setmailError] = useState("");
  const [isSubmit, setisSubmit] = useState(true);
  const [alert, setAlert] = useState("hide");

  const [stateInput, setStateInput] = useState({
    fullname: "",
    country: "",
    city: "",
    mail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = JSON.parse(
      JSON.stringify(Object.fromEntries(formData.entries()))
    );
    if (!spaceReg.test(data.fullname)) {
      setAlert("show");
    } else {
      var add = [
        data.fullname,
        "tesodev",
        data.mail,
        "12/10/2022",
        data.country,
        data.city,
      ];
      mockData.data.push(add);
      window.location.reload();
    }
  };
  const handleKeyPress = (e) => {
    if (!/^[a-zA-Z\s]*$/i.test(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const fullnameLen = stateInput.fullname.length;
    const countryLen = stateInput.country.length;
    const cityLen = stateInput.city.length;
    const mail = stateInput.mail;

    if (
      fullnameLen >= 4 &&
      countryLen >= 2 &&
      cityLen >= 2 &&
      emailValidation.test(mail)
    ) {
      setisSubmit(false);
    } else {
      setisSubmit(true);
    }
  }, [stateInput]);

  const handleError = (e) => {
    const element = e.target;
    const val = element.value;

    if (element.getAttribute("name") === "fullname") {
      if (val.length < 4) {
        setfullnameError("You must enter at least four letters.");
      } else {
        setfullnameError("");
      }
    }
    if (element.getAttribute("name") === "country") {
      if (val.length < 2) {
        setcountryError("You must enter at least two letters.");
      } else {
        setcountryError("");
      }
    }
    if (element.getAttribute("name") === "city") {
      if (val.length < 2) {
        setcityError("You must enter at least two letters.");
      } else {
        setcityError("");
      }
    }
    if (element.getAttribute("name") === "mail") {
      if (!emailValidation.test(val)) {
        setmailError("Please enter in e-mail format.");
      } else {
        setmailError("");
      }
    }
  };

  return (
    <div className="addlink">
      <div className="d-flex my-3 mx-5">
        <Link to="/">
          <img
            alt="logo"
            style={{ width: "150px", height: "70px", marginRight: "30px" }}
            src={Logo}
          />
        </Link>
        <div className="d-flex return-list align-items-center mt-3">
          <Link to="/listPage">
            <p>
              <ArrowIcon></ArrowIcon> Return to List Page
            </p>
          </Link>
        </div>
      </div>
      <Alert visible={alert}></Alert>
      <form onSubmit={handleSubmit}>
        <InputGroup
          onKeyDown={handleKeyPress}
          name={"fullname"}
          title={"Name Surname"}
          maxLength={60}
          placeholder={"Enter name and surname"}
          error={fullnameError}
          onBlur={handleError}
          onChange={(e) =>
            setStateInput({
              ...stateInput,
              [e.target.name]: e.target.value,
            })
          }
        ></InputGroup>
        <InputGroup
          onKeyDown={handleKeyPress}
          name={"country"}
          title={"Country"}
          maxLength={40}
          placeholder={"Enter a country"}
          error={countryError}
          onBlur={handleError}
          onChange={(e) =>
            setStateInput({
              ...stateInput,
              [e.target.name]: e.target.value,
            })
          }
        ></InputGroup>
        <InputGroup
          onKeyDown={handleKeyPress}
          name={"city"}
          title={"City"}
          maxLength={40}
          placeholder={"Enter a city"}
          error={cityError}
          onBlur={handleError}
          onChange={(e) =>
            setStateInput({
              ...stateInput,
              [e.target.name]: e.target.value,
            })
          }
        ></InputGroup>
        <InputGroup
          name={"mail"}
          title={"Email"}
          placeholder={"Enter a e-mail (abc@xyz.com)"}
          error={mailError}
          onBlur={handleError}
          onChange={(e) =>
            setStateInput({
              ...stateInput,
              [e.target.name]: e.target.value,
            })
          }
        ></InputGroup>
        <div style={{ float: "right" }}>
          <Button type="submit" disabled={isSubmit}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddLink;
