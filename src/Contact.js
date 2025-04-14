import React from "react";
import contactImage from "./images/contact.jpeg";

function Contact() {
  return (
    <div className="container p-4">
      <h1 className="mb-4"> Contact Us</h1>
      <p className="lead">
        We'd love to hear from you! Reach out to us for reservations, feedback, or a
        friendly chat.
      </p>
      <ul className="list-unstyled fs-5">
        <li><strong>Email:</strong> contact@cafebliss.com</li>
        <li><strong>Phone:</strong> +91 98765 43210</li>
        <li><strong>Location:</strong> 123 Coffee Street, Bengaluru</li>
      </ul>
      <img
        src={contactImage}
        alt="Cafe Map"
        className="img-fluid rounded mt-4"
        style={{ maxHeight: "800px" }}
      />
    </div>
  );
}

export default Contact;
