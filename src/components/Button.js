import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ btnLink, btnText, customClass }) {
  return (
    <div>
      <Link className={`button ${customClass}`} to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}

export default Button;
