import React from "react";
import "./DeepFakeCases.css";
import deepFakeImage from "../assets/deepfake-image.png"; // Ensure the image is in the assets folder

function DeepFakeCases() {
  return (
    <div className="deepfake-cases-section" data-aos="fade-up">
      <div className="image-section">
        <img
          src={deepFakeImage}
          alt="Rise of the Deepfakes"
          className="deepfake-image"
        />
      </div>
      <div className="text-section">
        <div className="case-item">
          <h3>Deep Fake Audio Scam in 2019</h3>
          <p>
            Criminals used AI-generated audio to impersonate a CEO, leading to a
            €220,000 financial fraud, showcasing deep fakes' potential in
            sophisticated scams.
          </p>
        </div>
        <div className="case-item">
          <h3>Russian Deep Fake Propaganda (2021)</h3>
          <p>
            A deep fake video of Ukrainian President Zelenskyy urging soldiers
            to surrender highlighted the use of deep fakes in psychological
            warfare during geopolitical conflicts.
          </p>
        </div>
        <div className="case-item">
          <h3>Nancy Pelosi Deep Fake Video (2019)</h3>
          <p>
            A manipulated video of Nancy Pelosi raised concerns about
            disinformation, demonstrating how easily altered content can impact
            political stability.
          </p>
        </div>
        <div className="case-item">
          <h3>Indian Politician Deep Fake Campaign (2020)</h3>
          <p>
            During the 2020 Delhi election, a deep fake video of BJP candidate
            Manoj Tiwari sparked controversy by showing him speaking in two
            languages. This raised ethical concerns in politics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeepFakeCases;
