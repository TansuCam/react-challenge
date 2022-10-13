import React, { useState } from "react";
import "./styles/AddLink.css";

function Alert(props) {
  const [hide, setHide] = useState("hide");
  return (
    <div>
      <div
        className={`alert alert-warning alert-dismissible fade ${props.visible} ${hide}`}
        role="alert"
      >
        <div className="w-75 mt-2 ms-1">
          <strong>Error while adding link element</strong>
          <p className="mt-3">
            Name and surname should contain at least 2 words
          </p>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setHide("d-none")}
        ></button>
        <span>Error</span>
      </div>
    </div>
  );
}

export default Alert;
