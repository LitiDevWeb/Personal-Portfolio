import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "../components/Title";
import Project1 from "../assets/Projet1.png";
import Project2 from "../assets/Projet2.png";
import Project3 from "../assets/Projet3.png";
import Project from "../assets/Project.png";
import Project4 from "../assets/Project4.png";
import "./Projects.css";
import Product from "../components/Product";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      id: 1,
      imageurl: Project3,
      title: "Auctions Website",
      description:
        " I crafted a robust Auctions Website with Python and Django, offering a seamless experience.",
      git: "https://github.com/LitiDevWeb/Commerce_Project2.git",
    },

    {
      id: 2,
      imageurl: Project1,
      title: "Remodeling & Restoration",
      description:
        "An user-friendly design App using Figma, offering an intuitive interface and interactive prototypes.",
      git: "https://github.com/LitiDevWeb/Restoration_Project.git",
    },

    {
      id: 3,
      imageurl: Project,
      title: "Sia's Portfolio Website",
      description:
        " I build my personal portfolio website from design to code, I use my new programming skills using React.",
      git: "https://github.com/LitiDevWeb/Personal-Portfolio.git",
    },

    {
      id: 4,
      imageurl: Project2,
      title: "Calculator App",
      description:
        "I built a precise AC calculatore App with javascript and Resact, featuring a sleek user interface.",
      git: "https://github.com/LitiDevWeb/Calculator-App-React.git",
    },
    {
      id: 5,
      imageurl: Project4,
      title: "Frontend Email Client ",
      description:
        "I dsign a front-end for an email client that makes API calls to send and receive emails, client-side",
      git: "https://github.com/LitiDevWeb/Mail_Project3.git",
    },
  ];

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      title={item.title}
      description={item.description}
      git={item.git}
    />
  ));

  return (
    <>
      <Title heading="Projects()" customClass="project-title" />
      <Carousel responsive={responsive}>{product}</Carousel>;
    </>
  );
}

export default Projects;
