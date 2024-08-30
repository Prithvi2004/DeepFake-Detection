import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About DeepShield</h3>
          <p>
            DeepShield is a cutting-edge platform dedicated to detecting and
            analyzing deepfake videos using advanced AI/ML techniques. Our
            mission is to safeguard truth and authenticity in the digital age.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#HeroSection">Home</a>
            </li>
            <li>
              <a href="#WhatWeOffer">Features</a>
            </li>
            <li>
              <a href="#IntroMission">About Us</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> VITB,Bhimavaram
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +91 83094 66413
          </p>
          <p>
            <i className="fas fa-envelope"></i> support@deepshield.com
          </p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} DeepShield | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
