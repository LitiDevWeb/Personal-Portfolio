import React from "react";
import "./AboutSection.css";
import AboutImg from "../assets/images/AboutImg.png";
import Title from "./Title";
import PText from "./PText";
import Button from "../components/Button";

function AboutSection() {
  return (
    <>
      <div className="container-about">
        <div className="aboutsection_left">
          <img src={AboutImg} alt="picture_about" className="img"></img>
        </div>

        <div className="aboutsection_right">
          <div className="title">
            <Title heading="About()" />
          </div>

          <div className="text">
            <PText>
              "I am a passionate UX Designer and Frontend Developer based in
              Algeria, specializing in the full spectrum of website creation,
              from concept to crafting modern, user-friendly experiences.
              <br></br>
              <br></br> My journey from turning my creative ideas into
              functional websites has become my profession. I am unwavering in
              my commitment to staying at the forefront of innovation by
              continuously embracing the latest technologies and frameworks."
            </PText>
          </div>
          <div className="aboutsection_buttons">
            <Button
              btnLink="../projects"
              btnText="Download CV"
              customClass="download-button"
            />
            <Button
              btnLink="../certifications"
              btnText="Certifications"
              customClass="certification-button"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
