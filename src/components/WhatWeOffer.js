import React from "react";
import "./WhatWeOffer.css";
import offerImage from "../assets/offer-image.png"; // Ensure the image is in the assets folder

function WhatWeOffer() {
  return (
    <div className="what-we-offer-section" data-aos="fade-up">
      <div className="offer-text-section">
        <h2 className="offer-title">What We Offer ?</h2>
        <div className="offer-item">
          <h3>Advanced Detection</h3>
          <p>
            DeepShield uses advanced algorithms like CNNs, RNNs, and GANs to
            detect inconsistencies in facial features and movements that are
            often missed by the human eye.
          </p>
        </div>
        <div className="offer-item">
          <h3>Comprehensive Analysis</h3>
          <p>
            Our system provides a detailed report of the video, highlighting
            abnormalities and offering insights into the techniques used to
            create the deep fake.
          </p>
        </div>
        <div className="offer-item">
          <h3>User-Friendly Interface</h3>
          <p>
            With a simple and intuitive interface, DeepShield makes it easy to
            upload videos, receive analysis, and understand the results.
          </p>
        </div>
        <div className="offer-item">
          <h3>Visualized Reports</h3>
          <p>
            DeepShield provides clear, visualized reports with graphs, heatmaps,
            and making it easy to interpret the analysis results and understand
            the detected abnormalities at a glance.
          </p>
        </div>
      </div>
      <div className="offer-image-section">
        <img src={offerImage} alt="What We Offer" className="offer-image" />
      </div>
    </div>
  );
}

export default WhatWeOffer;
