import * as React from "react";
import "./styles/Button.css";

function Button({ children, type = "button", isDisable = false, onClick }) {
  return (
    <button
      type={type}
      disabled={isDisable}
      className="btn primary-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
