import React from "react";
import "./Title.css";

function Title({ heading = "This is headnig", customClass }) {
  const classNames = `title ${customClass}`;

  return <h3 className={classNames}>{heading}</h3>;
}

export default Title;
