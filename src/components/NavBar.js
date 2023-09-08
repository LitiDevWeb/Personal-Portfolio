import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
import linkedin from "../assets/images/linkedin.png";
import mail from "../assets/images/mail.png";
import github from "../assets/images/github.png";
import "./NavBar.css";
import Button from "../components/Button";

function NavBar() {
  return (
    <>
      <div className="align">
        <div className="logo">
          <img src={Logo} alt="logo-sia"></img>
        </div>
        <nav className="menu">
          <ul>
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
            <Link to="/projects" className="nav-item">
              Projects
            </Link>
            <Link to="/services" className="nav-item">
              Services
            </Link>
          </ul>
        </nav>

        <div className="btn">
          <Button
            btnLink="../contact"
            btnText="Contact me"
            customClass="contact-button"
          />

          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/litissia-hadjout/">
              <img src={linkedin} width={50}></img>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <img src={mail} width={50}></img>
            </a>
            <a href="https://github.com/LitiDevWeb">
              <img src={github} width={50}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
