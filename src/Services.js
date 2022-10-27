import React from "react";
import Patbern from "./site pictures/Patbern.jpg";
// import images from "./Images";
// import ImageSlider from "./ImageSlider";

function Services() {
  return (
    <>
      <section className="services">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1>Hello There👋</h1>
          <p>Welcome To My Portfolio Page</p>
          {/* <ImageSlider images={images} /> */}
          <img src={Patbern} alt="Patbern" className="patbern" data-aos="zoom-in" data-aos-delay="500"></img>
        </div>
        <div className="web-services" data-aos="fade-right" data-aos-delay="100">
          <h1>Langauges I Speak</h1>
          <span>(in Percentage)</span>
          <p>HTML</p>
          <div className="bar-container">
            <div className="html-bar">
              <span></span>
            </div>
          </div>

          <p>CSS</p>
          <div className="bar-container">
            <div className="css-bar"></div>
          </div>

          <p>JavaScript</p>
          <div className="bar-container">
            <div className="javascript-bar"></div>
          </div>

          <p>React.JS</p>
          <div className="bar-container">
            <div className="react-bar"></div>
          </div>

          <p>Git</p>
          <div className="bar-container">
            <div className="git-bar"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
