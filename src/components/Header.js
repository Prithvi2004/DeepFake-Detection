import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" data-aos="fade-up">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <a href="#HeroSection">Home</a>
          </li>
          <li>
            <a href="#Stats">Stats</a>
          </li>
          <li>
            <a href="#IntroMission">Mission</a>
          </li>
          <li>
            <a href="#DeepFakeCases">News</a>
          </li>
          <li>
            <a href="#WhatWeOffer">Features</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
