import React from "react";
import HeroImg from "../assets/images/HeroImg.png";
import "./HeroSection.css";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="column">
          <h1 className="hero__heading">
            <h2>
              Hi, I'm <span> &lt; Litissia Hadjout /&gt;</span>
            </h2>
            <h3>Web Developer & Designer </h3>
            <p>bringing digital versions to life</p>
            <div className="hero__btn">
              <button>
                <Link to="/contact" className="btn-hire">
                  Hire me
                </Link>
              </button>
            </div>
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
