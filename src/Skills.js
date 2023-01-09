import React from "react";
import patbern from "./site pictures/pat.jpg";
import Blog from "./Blog";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Map from "./Map";

function Skills() {
  return (
    <>
    <h1>My Blog</h1>
      <div className="prepare">
        <div className="prepareimage" data-aos="zoom-in" data-aos-delay="1000">
          <img src={patbern} />
        </div>

        <div className="prepareText" data-aos="fade-right" data-aos-delay="100">
          <Blog />
        </div>
      </div>
    </>
  );
}

export default Skills;
