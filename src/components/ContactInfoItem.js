import React from "react";
import "./ContactInfoItem.css";
import PText from "../components/PText";

function ContactInfoItem({ icon, text = "this is an info" }) {
  return (
    <>
      <div className="contact-info__item">
        <div className="icon">
          <img src={icon} alt="icons-contacts" className="image-icon"></img>
        </div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </div>
    </>
  );
}

export default ContactInfoItem;
