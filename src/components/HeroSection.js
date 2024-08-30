import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import loadingGif from "../assets/oUimVfeqwk.gif"; // Import the loading GIF

function HeroSection() {
  const [caption, setCaption] = useState("");
  const [fileName, setFileName] = useState(""); // State to hold the selected file name
  const [isLoading, setIsLoading] = useState(false); // State to handle loading animation
  const fullCaption = "Revealing Reality, Defending Integrity";
  const navigate = useNavigate();

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the file name state
    } else {
      setFileName(""); // Clear the file name if no file is selected
    }
  };

  const handleUploadClick = () => {
    if (fileName) {
      setIsLoading(true); // Show loading animation
      setTimeout(() => {
        setIsLoading(false); // Hide loading animation after 3 seconds
        navigate("/results"); // Navigate to the results page
      }, 5000);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <div className="hero-section" data-aos="fade-up">
      {isLoading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="Loading..." className="loading-gif" />
          <div className="loading-text">
            Analyzing
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      ) : (
        <>
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
              <label className="custom-file-upload">
                <input
                  type="file"
                  className="upload-input"
                  onChange={handleFileChange}
                />
                <i className="fa fa-cloud-upload"></i> Choose File
              </label>
              {fileName && <span className="file-name">{fileName}</span>}
              <button className="upload-button" onClick={handleUploadClick}>
                <i className="fa fa-upload"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSection;
