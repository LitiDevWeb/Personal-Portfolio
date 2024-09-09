import React, { useState } from "react";
import "./Gallery.css";
import a from "../../assets/certifications/Meta/a.png";
import b from "../../assets/certifications/Meta/b.png";
import c from "../../assets/certifications/Meta/c.png";
import d from "../../assets/certifications/Meta/d.png";
import e from "../../assets/certifications/Meta/e.png";
import f from "../../assets/certifications/Meta/f.png";
import g from "../../assets/certifications/Google/g.png";
import h from "../../assets/certifications/Google/h.png";
import i from "../../assets/certifications/Google/i.png";
import j from "../../assets/certifications/Google/j.png";
import k from "../../assets/certifications/Google/k.png";
import l from "../../assets/certifications/Google/l.png";
import m from "../../assets/certifications/Education/m.jpg";
import n from "../../assets/certifications/Education/m.png";
import o from "../../assets/certifications/Education/n.png";
import p from "../../assets/certifications/Education/p.png";
import q from "../../assets/certifications/Education/q.png";

// Utilisez les données de Menu comme tableau initial
const Menu = [
  { id: 2, image: q, category: "education" },
  { id: 1, image: a, category: "meta" },
  { id: 3, image: b, category: "meta" },
  { id: 4, image: c, category: "meta" },
  { id: 5, image: d, category: "meta" },
  { id: 6, image: e, category: "meta" },
  { id: 7, image: f, category: "meta" },
  { id: 14, image: n, category: "education" },
  { id: 8, image: g, category: "google" },
  { id: 9, image: h, category: "google" },
  { id: 10, image: i, category: "google" },
  { id: 11, image: j, category: "google" },
  { id: 12, image: k, category: "google" },
  { id: 13, image: l, category: "google" },
  { id: 15, image: m, category: "education" },
  { id: 16, image: o, category: "education" },
  { id: 17, image: p, category: "education" },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Menu.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Menu.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="carousel-container">
        <button className="nav-button" onClick={handlePrev}>
          &#10094; {/* Symbole de flèche gauche */}
        </button>

        <div className="image-container">
          <img
            src={Menu[currentIndex].image}
            alt={Menu[currentIndex].category}
          />
        </div>

        <button className="nav-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </>
  );
}

export default Gallery;
