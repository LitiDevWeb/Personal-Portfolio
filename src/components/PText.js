// import React from "react";
// import "./PText.css";
// Comment: children me permet d'ecrire direct a l'interieur de <PText>....</PText>
// function PText(props) {
//   return <p>{props.children}</p>;
// }

// export default PText;

import React from "react";
import "./PText.css";

function PText({ children, className }) {
  // Utilisez className pour ajouter des classes CSS personnalisées
  const classNames = `para ${className || ""}`;

  return <p className={classNames}>{children}</p>;
}

export default PText;
