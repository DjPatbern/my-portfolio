import React from "react";
import altsite from "./site pictures/altsite.PNG";
import archison from "./site pictures/archison.PNG";
import chaaaa from "./site pictures/chaaaa.PNG";
import gwears from "./site pictures/gwears.PNG";
import demusiclinkup from "./site pictures/demusiclinkup.PNG";
import typing from "./site pictures/typing.PNG";

function Projects() {
  return (
    <>
    <h1>PROJECTS</h1>
      <div className="web-expert">
        <div className="mission" data-aos="zoom-in" data-aos-delay="200">
          <h2>Alt School Site Recreate</h2>
          <img src={altsite} alt="our mission" />
          <p>
            "I recreated the official website of Altschool Africa with more animations and dynamic features.
            I did this with HTML, CSS and JavaScript. It is a simple School Landing Page that carries basic Informations 
            about the school."
            <form method="get" target="_blank" action="https://alt-recreate-site.patbern.repl.co/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="vission" data-aos="zoom-in" data-aos-delay="500">
          <h2>Archison Entertainment</h2>
          <img src={archison} alt="our mission" />
          <p>
            "Here is a website I made for an event/artiste management lable. The website consist of Informations about 
            the firms signed music artistes and links to book them. It also have features to buy tickets for it's upcoming
            events."
            <form method="get" target="_blank" action="https://archisonentertainment.blogspot.com/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="value" data-aos="zoom-in" data-aos-delay="200">
          <h2>Network Tracker</h2>
          <img src={chaaaa} alt="our value" />

          <p>
            "This here is a web app from my Altschool's Circle. I coded out the interface with HTML and CSS.
            While my collegues took charge of the JavaScript. This app helps track the network of any valid mobile number
            filled on the input field"
            <form method="get" target="_blank" action="https://circle-31-phonie.circle31.repl.co/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>
      

      
        <div className="mission" data-aos="zoom-in" data-aos-delay="200">
          <h2>Gwears Website</h2>
          <img src={gwears} alt="our mission" />
          <p>
            "This is a simple ECommerce website i built for a Boutique. Here, clothes can be ordered
            online by costumers. The website as well carriers basic informations about the Boutique and it's forthcomings.
            <form method="get" target="_blank" action="https://www.gwears.ng">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="vission" data-aos="zoom-in" data-aos-delay="500">
          <h2>Typing Speed Game</h2>
          <img src={typing} alt="our mission" />
          <p>
            "This is a typing speed game built with HTML, CSS and JavaScript. It test the typing speed of it's user.
            It carries stunning functionalities like Level switching, Game sound, Complex Wordings etc. "
            <form method="get" target="_blank" action="https://djpatbern.github.io/Typing-Speed-Game/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="value" data-aos="zoom-in" data-aos-delay="200">
          <h2>DmL Web Blog</h2>
          <img src={demusiclinkup} alt="our value" />

          <p>
            "This is a web App made with features that allow users  to download and stream songs and videos online.
            It as well carriers features of most trending songs, recorded with most visited from it's users. "
            <form method="get" target="_blank" action="https://www.demusiclinkup.com.ng">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
