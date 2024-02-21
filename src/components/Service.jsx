// Service.js
import React from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
const Service = () => {
  const servicesData = [
    {
      title: "Web Development",
      description: "Building responsive and dynamic websites.",
      imageUrl: img1,
    },
    {
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile apps.",
      imageUrl: img2,
    },
    {
      title: "Graphic Design",
      description: "Designing visually appealing graphics and logos.",
      imageUrl: img3,
    },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="service-container">
        {servicesData.map((service, index) => (
          <div
            className="service-card"
            key={index}
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
