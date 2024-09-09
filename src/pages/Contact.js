import React from "react";
import Title from "../components/Title";
import ContactSection from "../components/ContactSection";
import Map from "../components/Map";

function Contact() {
  return (
    <>
      <Title heading="Contact()" customClass="project-title" />
      <ContactSection />
      <Map />
    </>
  );
}

export default Contact;
