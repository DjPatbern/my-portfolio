import React, {  useState } from "react";
import "./App.css";
import Socials from "./Socials";
import Typewriter from "./Typewriter";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Map from "./Map";
import Contact from "./Contact";
import { Divide as Hamburger } from 'hamburger-react'
import bootstrap from 'bootstrap'

function App() {
  const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }

  const [isOpen, setOpen] = useState(false)



  return (
    <div className={darkTheme ? "App" : "light-theme"}>
      <header className="App-header">
        <div className="modes">
          <button onClick={() => setDarkTheme(false)}>Light🌞</button>
          <button onClick={() => setDarkTheme(true)}>Dark🌃</button>
        </div>

        {/* {/* Drop Down
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div class="dropdown-content">
            <a href="#programs">Programs</a>
            <a href="#qa">QA</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#contact">Contact</a>
          </div> 
        </div> */}

        

        <div className="dropdown">
        <Hamburger toggle={() => setOpen(prevOpen => !prevOpen)} 
        rounded toggled={isOpen}/>
          <div className={isOpen ? "dropdown-content" : "setOpen"}>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#blog">ABOUT ME</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>

        <Typewriter />
        <Socials />
        <section>
          <form
            method="get"
            target="_blank"
            action="mailto:victorbernardpatrick@gmail.com"
          >
            <button className="hire-btn" type="submit">
              Mail Me
            </button>
          </form>
        </section>
        <section className="nav">
          <nav>
            <a href="#skills" rel="noreferrer">
              SKILLS
            </a>
            <a href="#projects" rel="noreferrer">
              PROJECTS
            </a>
            <a href="#blog" rel="noreferrer">
              ABOUT ME
            </a>
            <a href="#map" rel="noreferrer">
              MAP
            </a>
            <a href="#contact" rel="noreferrer">
              CONTACT ME
            </a>
          </nav>
        </section>
      </header>

      <section id="skills">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blog">
        <Skills />
      </section>

      <section id="map">
        <Map />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <a href="#" className="top">
        &#8593;
      </a>
    </div>
  );
}

export default App;
