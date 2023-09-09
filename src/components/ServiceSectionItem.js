import React from "react";
import PText from "./PText";
import "./ServiceSectionItem.css";

function ServiceSectionItem({
  icon,
  title = "Web Design",
  description = "I have expertise in creating visually appealing and user-centered websites, using Figma to innovate low and high- fidelity prototypes and wireframes. pushing the boundaries of creativity, innovation to ensure an amazing UX",
}) {
  return (
    <>
      <div className="container-service">
        <div className="serviceItem__icon">
          <img src={icon} alt="Service Icon" className="enlarge-image" />
        </div>
        <div className="serviceItem__title">{title}</div>
        <PText className="para">{description}</PText>
      </div>
    </>
  );
}

export default ServiceSectionItem;
