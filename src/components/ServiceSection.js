import React from "react";
import Title from "../components/Title";
import ServiceSectionItem from "../components/ServiceSectionItem";
import "./ServiceSection.css";
import design from "../assets/design.png";
import resp from "../assets/resp.png";
import web from "../assets/web.png";

function ServiceSection() {
  return (
    <div className="container-sectionservice">
      <Title heading="Services()" customClass="service-title" />
      <div className="services_all_items">
        <ServiceSectionItem
          icon={web}
          title="Web Dev"
          description="I excel in web development, harnessing the power of HTML, CSS, JavaScript,and React to create cutting-edge web sites,my expertise lies in crafting innovative websites for a remarkable online presence."
        />
        <ServiceSectionItem
          icon={resp}
          title="Responsive App"
          description="I'm at the forefront of designing and developing responsive applications that cater to a diverse range of devices, from tablets and phones to desktop PCs. My apps are optimized for each platform."
        />
        <ServiceSectionItem
          icon={design}
          title="Web Design"
          description="I have expertise in creating visually appealing and user-centered websites, using Figma to innovate low and high-fidelity prototypes and wireframes. pushing te boundaries of creativity, innovation to ensure an amazing UX."
        />
      </div>
    </div>
  );
}

export default ServiceSection;
