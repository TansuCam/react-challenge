import * as React from "react";
import "./styles/Button.css";

function Button({ children, type = "button", isDisable = false }) {
  return (
    <button type={type} disabled={isDisable} className="btn primary-button">
      {children}
    </button>
  );
}

export default Button;
