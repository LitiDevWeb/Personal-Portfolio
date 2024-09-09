import React from "react";
import "./ContactSection.css";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";
import phone_icon from "../assets/phone_icon.png";
import mail_icon from "../assets/mail_icon.png";
import local_icon from "../assets/local_icon.png";

function ContactSection() {
  return (
    <div className="flex-cont">
      <div className="right">
        <ContactInfoItem icon={phone_icon} text="06 56 65 77 17" />
        <ContactInfoItem icon={mail_icon} text="laetitiahadjout7@gmail.com" />
        <ContactInfoItem icon={local_icon} text="Tizi Ouzou, Algeria" />
      </div>
      <div className="left">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
