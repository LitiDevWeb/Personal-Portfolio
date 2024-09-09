import React, { useRef } from "react";
import "./AboutSection.css";
import AboutImg from "../assets/images/AboutImg.png";
import Title from "./Title";
import PText from "./PText";
import Button from "../components/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function AboutSection() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PDF",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("../../public/pdf/CV.pdf");
    });
  };
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
            <div className="pdf-btn" ref={pdfRef}>
              <Button
                btnText="Download CV"
                customClass="download-button"
                onClick={downloadPDF}
              />
            </div>

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
