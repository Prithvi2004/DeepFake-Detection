import React from "react";
import "./Stats.css";
import { FaVideo, FaChartLine, FaBalanceScale } from "react-icons/fa"; // Importing FontAwesome icons

function Stats() {
  return (
    <div className="stats-section" data-aos="fade-up">
      <div className="stat">
        <FaVideo className="icon icon1" />
        <p>
          Face-swap deepfakes make up over 70% of all deepfake videos, posing a
          significant threat to personal and public security.
        </p>
      </div>
      <div className="stat">
        <FaChartLine className="icon icon2" />
        <p>
          By 2024, the number of deepfake videos online surpassed 85,000, with a
          doubling rate every six months.
        </p>
      </div>
      <div className="stat">
        <FaBalanceScale className="icon icon3" />
        <p>
          In a survey, 74% of respondents expressed concern about deepfake
          videos affecting elections and public trust.
        </p>
      </div>
    </div>
  );
}

export default Stats;
