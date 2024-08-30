import React from "react";
import "./IntroMission.css";
import missionImage from "../assets/mission-image.png"; // Make sure to save the image in the assets folder

function IntroMission() {
  return (
    <div className="intro-mission-section" data-aos="fade-up">
      <div className="text-section">
        <div className="intro-mission-item">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            Deep fake technology creates hyper-real yet entirely fabricated
            videos, emerging as a powerful tool for deception. By spreading
            misinformation, committing fraud, and damaging reputations, deep
            fakes challenge our ability to discern truth from fiction.
          </p>
        </div>
        <div className="intro-mission-item">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At DeepShield, we protect truth and authenticity in the digital age.
            Our AI/ML solution detects face-swap deep fakes, where identities
            are maliciously altered. We empower users to defend against digital
            deception.
          </p>
        </div>
      </div>
      <div className="image-section">
        <img
          src={missionImage}
          alt="Mission Illustration"
          className="mission-image"
        />
      </div>
    </div>
  );
}

export default IntroMission;
