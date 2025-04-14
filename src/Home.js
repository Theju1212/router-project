import React from "react";
import homeImage from "./images/home.jpeg";

function Home() {
  return (
    <div className="container text-center p-4">
      <h1 className="mb-4"> Welcome to Cafe Bliss</h1>
      <p className="lead">
        A cozy place to enjoy your favorite coffee, desserts, and conversations.
      </p>
      <img
        src={homeImage}
        alt="Cafe"
        className="img-fluid rounded mt-4"
        style={{ maxHeight: "800px" }}
      />
    </div>
  );
}

export default Home;
