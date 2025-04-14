import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Cafe Bliss</Link>
          <div>
            <Link className="btn btn-outline-secondary mx-1" to="/">Home</Link>
            <Link className="btn btn-outline-secondary mx-1" to="/about">About</Link>
            <Link className="btn btn-outline-secondary mx-1" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
