import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "./assets/course-video.mp4";
import aboutBg from "./assets/apply-bg.jpg";
import contactBg from "./assets/facts-bg.jpg";
import logo from "./assets/Screenshot_2024-08-28_110535-removebg-preview.png"; // Import the logo image

function Home() {
  function scrollLeft() {
    document.querySelector('.roadmap-container').scrollBy({ left: -200, behavior: 'smooth' });
  }

  function scrollRight() {
    document.querySelector('.roadmap-container').scrollBy({ left: 200, behavior: 'smooth' });
  }

  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="home-page">
      <video src={video} autoPlay muted loop className="background-video"></video>
      <nav>
        <ul>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact Us</a></li>
        </ul>
        <div className="auth-links">
          <Link to="/signin" className="auth-button">Login</Link>
        </div>
      </nav>
      <header id="home">
        <img src={logo} alt="Logo" />
        <h1>Learn Mitra</h1>
        <p>Your journey to knowledge begins here!</p>
        <Link to="/register">
          <button className="btn-register">Register</button>
        </Link>
      </header>

      <section className="roadmap" id="roadmap">
        <div className="container">
          <div className="section-heading">
            <h2>Map Your Path To Mastery</h2>
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
                <h4>FullStack</h4>
                <button className="navigate-btn">View Details</button>
              </div>
              <div className="roadmap-item">
                <h4>Web D</h4>
                <button className="navigate-btn">View Details</button>
              </div>
            </div>
            <button className="scroll-right" onClick={scrollRight}>›</button>
          </div>
        </div>
      </section>

      <section
        className="about"
        id="about"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          padding: "70px 20px 40px",
          color: "white",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="about-content">
          <article id="i1">
            <h2>About Us</h2>
            {/* <p>We are committed to providing quality education through our innovative learning platform, Learn Mitra. Our platform offers a diverse range of courses to cater to various learning needs and helps students achieve their educational goals with ease and efficiency.</p> */}
            <p className="animated-text">"We are committed to providing quality education through our innovative learning platform, Learn Mitra. Our platform offers a diverse range of courses to cater to various learning needs and helps students achieve their educational goals with ease and efficiency . Learn Mitra is designed to streamline education by providing a centralized platform where students can access all their learning resources in one place. This ensures a seamless learning experience without the hassle of navigating multiple websites. Instructors also benefit from a unified dashboard that allows them to monitor all students' progress in real-time, simplifying the teaching process. Our platform is built on the MERN stack and incorporates AI integration, delivering personalized learning paths tailored to each student's needs. Our platform features a cutting-edge learning dashboard that provides students with real-time reading statistics, enabling them to track their progress and stay motivated. Instructors can easily create personalized learning paths, integrating various resources to cater to different learning styles."</p>
          </article>
        </div>
      </section>

      <section
        className="contact"
        id="contact"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 50px",
          color: "white",
        }}
      >
        <div className="contact-container">
          <div className="contact-content">
            <article id="I3" className="contact-details">
              <h2 className="contact-heading">Contact Us</h2>
              <p className="contact-subheading">For any inquiries, reach out to us!</p>
              <div class="container">
                <div class="row-1">
                  <div class="col-1">
                    <p>Email: info@learnmitra.com</p>
                    <p>Phone: +91 8755417659</p>
                    <div>
                      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div class="col-2">
                    <form className="contact-form">
                      <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Your Email" required />
                      <textarea placeholder="Your Message" required></textarea>
                      <button type="submit">Send Message</button>

                    </form>
                  </div>
                </div>
              </div>






            </article>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
