import React from "react";
import tikearn from "./site pictures/tikearn.PNG";
import techie from "./site pictures/techie.PNG";
import pos from "./site pictures/pos.PNG";
import gwears from "./site pictures/gwears.PNG";
import gitapi from "./site pictures/gitapi.PNG";
import typing from "./site pictures/typing.PNG";

function Projects() {
  return (
    <>
    <h1>PROJECTS</h1>
      <div className="web-expert">

        <div className="vission" data-aos="zoom-in" data-aos-delay="500">
          <h2>Techie Meet App</h2>
          <img src={techie} alt="our mission" />
          <p>
          This serves as a micro-blog for Tech Enthusiast to meet, post, chat, comment and like. It works with email and
password authentication, accepts blog post with image upload, unique delete of post , comments and chats, password
reset if forgotten and many more features. - MADE WITH: REACTJS & FIREBASE

            
            <form method="get" target="_blank" action="https://blog-app-6ea90.web.app/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="value" data-aos="zoom-in" data-aos-delay="200">
          <h2>TikEarn</h2>
          <img src={tikearn} alt="our value" />

          <p>
          Tikearn is a platform that enables TikTok creators to earn Money
Tikearn also makes it easier for promoters/advertisers to promote their content at a very affordable rate. - MADE WITH: REACTJS
            <form method="get" target="_blank" action="https://tikearn.vercel.app/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>
      

      
        <div className="mission" data-aos="zoom-in" data-aos-delay="200">
          <h2>Gwears Website</h2>
          <img src={gwears} alt="our mission" />
          <p>
          "This is a simple ECommerce website i built for a Boutique. Here, clothes can be ordered online by costumers. 
          The website as well carriers basic informations about the Boutique and it's forthcomings.
            <form method="get" target="_blank" action="https://www.gwears.ng">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="vission" data-aos="zoom-in" data-aos-delay="500">
          <h2>Typing Speed Game</h2>
          <img src={typing} alt="our mission" />
          <p>
          This is a typing speed game built with HTML, CSS and JavaScript. It test the typing speed of it's user. 
          It carries stunning functionalities like Level switching, Game sound, Complex Wordings etc. 
          - MADE WITH: HTML, CSS & JAVASCRIPT
            <form method="get" target="_blank" action="https://djpatbern.github.io/Typing-Speed-Game/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="value" data-aos="zoom-in" data-aos-delay="200">
          <h2>Point Of Sales Portal</h2>
          <img src={pos} alt="our value" />

          <p>
          This is a Point Of Sales Application which business users can login, upload their stock with prices, stock pictures
and stock name. A user will just need to click on each stock that is being bought by a client and the app automatically
sum up the price of the clients goods and print a reciept for the client - MADE WITH: REACTJS & FIREBASE
            <form method="get" target="_blank" action="https://pos-app-8de41.web.app/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>

        <div className="mission" data-aos="zoom-in" data-aos-delay="200">
          <h2>My GitHub Portfolio App</h2>
          <img src={gitapi} alt="our mission" />
          <p>
              This app fetches data of my GitHub Portfolio using GitHub API, it displays vital informations about my portfolio 
              to the DOM and also display all my repositories alongside details of each repository when clicked. - MADE WITH: REACTJS
            <form method="get" target="_blank" action="https://github-api-app-f4834.web.app/">
        <button className="hire-btn" type="submit">View Here</button>
    </form>
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
