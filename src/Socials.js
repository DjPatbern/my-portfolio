import React from "react";
import facebook from "./images/Facebook.png";
import GitHub from "./images/GitHub.png";
import Mail from "./images/Gmail.png";
import Linkedin from "./images/Linkedin.png";
import Twitter from "./images/Twitter.png";
import Whatsapp from "./images/Whatsapp.png";

function Socials() {
  return (
    <>
      <div className="social-media-logos">
        <a href="https://web.facebook.com/victor.bernard.370" target="_blank" rel="noreferrer">
          <img src={facebook} alt="example" />
        </a>
        <a href="https://github.com/DjPatbern/" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="example" />
        </a>
        <a href="https://www.linkedin.com/in/victor-patrick-740458229/" target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="example" />
        </a>
        <a href="https://twitter.com/DLinkup" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="example" />
        </a>
        <a href="https://wa.link/qmmz1s" target="_blank" rel="noreferrer">
          <img src={Whatsapp} alt="example" />
        </a>
      </div>
    </>
  );
}

export default Socials;
