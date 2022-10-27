import React from "react";

function Map() {
  return (
    <>
      <h1 className="map2">Find Me 😉</h1>
      <iframe
        className="map"
        id="map"
        data-aos="flip-up"
        data-aos-delay="100"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127185.30361180792!2d8.3629283!3d5.0156482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf99997207fd052da!2sDJ%20Patbern!5e0!3m2!1sen!2sng!4v1662281157187!5m2!1sen!2sng"
      ></iframe>
    </>
  );
}

export default Map;
