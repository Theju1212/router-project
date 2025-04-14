import React from "react";
import aboutImage from "./images/about.jpeg";

function About() {
  return (
    <div className="container p-4">
      <h1 className="mb-4"> About Cafe Bliss</h1>
      <p className="lead">
        Cafe Bliss started in 2015 with the dream of bringing freshly brewed coffee and
        handmade pastries to our local community. We use 100% Arabica beans and organic
        ingredients to serve you the best.
      </p>
      <img
        src={aboutImage}
        alt="Cafe Inside"
        className="img-fluid rounded mt-5"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
}

export default About;
