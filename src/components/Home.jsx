import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "./assets/course-video.mp4";

function Home() {
  function scrollLeft() {
    document.querySelector('.roadmap-container').scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight() {
    document.querySelector('.roadmap-container').scrollBy({ left: 200, behavior: 'smooth' });
  }

  return (
    <div className="home-page">
      <video src={video} autoPlay muted loop className="background-video"></video>
      <nav>
        <div className="logo">Logo</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <div className="auth-links">
          <Link to="/signin" style={{ color: 'white' }}>Login</Link>
        </div>
      </nav>
      <header>
        <h1>Learn Mitra</h1>
        <p>Your journey to knowledge begins here!</p>
        <Link to="/signup">
          <button>Let's Go</button>
        </Link>
      </header>

      <section className="roadmap" id="roadmap">
        <div className="container">
          <div className="section-heading">
            <h2>Your Learning Roadmap</h2>
          </div>
          <div className="roadmap-wrapper">
            <button className="scroll-left" onClick={scrollLeft}>‹</button>
            <div className="roadmap-container">
              <div className="roadmap-item">
                <h4>Java</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>DSA</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>C++</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>Python</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>Web Development</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>Full Stack</h4>
                <button className="navigate-btn">View Details</button>
              </div>
            </div>
            <button className="scroll-right" onClick={scrollRight}>›</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
