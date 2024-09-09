import React from "react";
import HeroImg from "../assets/images/HeroImg.png";
import "./HeroSection.css";
import Button from "./Button";

function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="column">
          <h1 className="hero__heading">
            <h2 className="h2-home">Hi, I'm &lt; Litissia Hadjout /&gt;</h2>
            <h3>Web Developer & Designer </h3>
            <p>bringing digital versions to life</p>

            <Button
              btnLink="../contact"
              btnText="Hire me"
              customClass="hire-button"
            />
          </h1>
        </div>
        <div className="hero__img">
          <img src={HeroImg} alt="img" className="enlarge-image"></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
