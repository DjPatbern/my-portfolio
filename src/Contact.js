import React from "react";
import facebook from "./images/Facebook.png";
import GitHub from "./images/GitHub.png";
import Mail from "./images/Gmail.png";
import Linkedin from "./images/Linkedin.png";
import Twitter from "./images/Twitter.png";
import Whatsapp from "./images/Whatsapp.png";

function Contact() {
  return (
    <>
      <div className="find-me">
        <h1>Contact Me</h1>
        <div
          className="all-contacts"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="address" data-aos="fade-right" data-aos-delay="100">
            <h2>Contact Me Via</h2>
            <div className="Contact">
              <img src={Whatsapp} alt="Whatsapp logo"></img>{" "}
              <span>+234-904-256-4049</span>
              <section>
                {" "}
                <img src={Mail} alt="Mail logo"></img>
                <span>victorbernardpatrick@gmail.com</span>
              </section>
              <p>Tel: +234-904-256-4049</p>
              <p>Address: Mekenge Layout, Calabar.<span className="crs">Cross Rivers State</span></p>
            </div>
            <div className="contact-socials">

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
            </div>
          </div>

          <div className="form" data-aos="zoom-in" data-aos-delay="500">
            <h2>
              <u>Contact Form</u>
            </h2>
            <form>
              <div className="name-email">
                <label for="name"></label>
                <input id="name" type="name" placeholder="Name" name="name" />

                <label for="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <label for="message"></label>
              <input id="message" type="text" placeholder="Message" />

              <input id="submit" type="submit" value="Submit Here" />
            </form>
          </div>
        </div>
      </div>
      <footer>&copy;2022: Created With ❤ By Victor Bernard</footer>
    </>
  );
}
export default Contact;
