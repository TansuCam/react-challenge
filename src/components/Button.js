import * as React from "react";
import "./styles/Button.css";

function Button({ children, type = "button", disabled = false, onClick }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="btn primary-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
