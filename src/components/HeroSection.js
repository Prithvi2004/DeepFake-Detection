import React, { useEffect, useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [caption, setCaption] = useState("");
  const fullCaption = "Revealing Reality, Defending Integrity";

  useEffect(() => {
    let index = 0;
    const typewriter = setInterval(() => {
      if (index < fullCaption.length) {
        setCaption(fullCaption.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typewriter);
      }
    }, 100);
    return () => clearInterval(typewriter);
  }, []);

  return (
    <div className="hero-section" data-aos="fade-up">
      <div className="circles-container">
        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>
      </div>
      <div className="title-container">
        <h1 className="title">DeepShield</h1>
        <p className="subtitle">
          <span className="caption">{caption}</span>
          <span className="cursor">|</span>
        </p>
        <br></br>
        <br></br>
        <div className="upload-box">
          <input
            type="file"
            className="upload-input"
            placeholder="Upload your file..."
          />
          <button className="upload-button">
            <i className="fa fa-upload"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
